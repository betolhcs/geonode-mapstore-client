# -*- coding: utf-8 -*-
#########################################################################
#
# Copyright (C) 2020 OSGeo
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.
#
#########################################################################
import json
import logging

from django.contrib.auth import get_user_model

from rest_framework.serializers import ValidationError

from dynamic_rest.serializers import DynamicModelSerializer
from dynamic_rest.fields.fields import DynamicRelationField

from geonode.geoapps.models import GeoAppData
from geonode.base.api.serializers import ResourceBaseSerializer

from mapstore2_adapter.geoapps.utils import update_geoapp_thumbnail

from ..models import Dashboard

logger = logging.getLogger(__name__)


class DashboardDataField(DynamicRelationField):

    def value_to_string(self, obj):
        value = self.value_from_object(obj)
        return self.get_prep_value(value)


class DashboardDataSerializer(DynamicModelSerializer):

    class Meta:
        ref_name = 'DashboardData'
        model = GeoAppData
        name = 'GeoAppData'
        fields = ('pk', 'blob')

    def to_internal_value(self, data):
        return data

    def to_representation(self, value):
        data = GeoAppData.objects.filter(resource__id=value).first()
        return json.loads(data.blob) if data else {}


class DashboardSerializer(ResourceBaseSerializer):

    def __init__(self, *args, **kwargs):
        # Instantiate the superclass normally
        super(DashboardSerializer, self).__init__(*args, **kwargs)

    class Meta:
        model = Dashboard
        name = 'dashboard'
        view_name = 'dashboards-list'
        fields = (
            'pk', 'uuid', 'app_type',
            'zoom', 'projection', 'center_x', 'center_y',
            'urlsuffix', 'data'
        )

    def to_internal_value(self, data):
        if 'data' in data:
            _data = data.pop('data')
            if self.is_valid():
                data['blob'] = _data
        return data

    def validate(self, data):
        request = self.context.get('request')
        if request:
            data['owner'] = request.user
        return data

    def create(self, validated_data):
        # Sanity checks
        if 'name' not in validated_data or \
        'owner' not in validated_data:
            raise ValidationError("No valid data: 'name' and 'owner' are mandatory fields!")

        if Dashboard.objects.filter(name=validated_data['name']).count():
            raise ValidationError("A GeoApp with the same 'name' already exists!")

        # Extract users' profiles
        _user_profiles = {}
        for _key, _value in validated_data.items():
            if _key in ('owner', 'poc', 'metadata_owner'):
                _user_profiles[_key] = _value
        for _key, _value in _user_profiles.items():
            validated_data.pop(_key)
            _u = get_user_model().objects.filter(username=_value).first()
            if _u:
                validated_data[_key] = _u
            else:
                raise ValidationError("The specified '{}' does not exist!".format(_key))

        # Extract JSON blob
        _data = None
        if 'blob' in validated_data:
            _data = validated_data.pop('blob')

        # Create a new instance
        _instance = Dashboard.objects.create(**validated_data)

        if _instance:
            update_geoapp_thumbnail(_instance, validated_data)

        if _instance and _data:
            try:
                _geo_app, _created = GeoAppData.objects.get_or_create(resource=_instance)
                _geo_app.blob = _data
                _geo_app.save()
            except Exception as e:
                raise ValidationError(e)

        _instance.save()
        return _instance

    def update(self, instance, validated_data):

        # Extract users' profiles
        _user_profiles = {}
        for _key, _value in validated_data.items():
            if _key in ('owner', 'poc', 'metadata_owner'):
                _user_profiles[_key] = _value
        for _key, _value in _user_profiles.items():
            validated_data.pop(_key)
            _u = get_user_model().objects.filter(username=_value).first()
            if _u:
                validated_data[_key] = _u
            else:
                raise ValidationError("The specified '{}' does not exist!".format(_key))

        # Extract JSON blob
        _data = None
        if 'blob' in validated_data:
            _data = validated_data.pop('blob')

        try:
            Dashboard.objects.filter(pk=instance.id).update(**validated_data)
            instance.refresh_from_db()
        except Exception as e:
            raise ValidationError(e)

        if instance:
            update_geoapp_thumbnail(instance, validated_data)

        if instance and _data:
            try:
                _geo_app, _created = GeoAppData.objects.get_or_create(resource=instance)
                _geo_app.blob = _data
                _geo_app.save()
            except Exception as e:
                raise ValidationError(e)

        instance.save()
        return instance

    """
     - Deferred / not Embedded --> ?include[]=data
    """
    data = DashboardDataField(
        DashboardDataSerializer,
        source='id',
        many=False,
        embed=False,
        deferred=True)
