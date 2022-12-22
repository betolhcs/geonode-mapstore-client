import React, { useEffect, useState, useRef } from 'react';

import './planetbasemap/planetbasemap.css';


const MultiSelectDropdown = ({ options, maxSelected }) => {
    const [selected, setSelected] = useState([]);
    const [enabled, setEnabled] = useState(false);

    const toggleOption = ({ id }) => {
        setSelected(prevSelected => {
            // if it's in, remove
            const newArray = [...prevSelected];
            if (newArray.includes(id)) {
                return newArray.filter(item => item !== id);
                // else, add
            }
            newArray.push(id);
            return newArray;
        });
    };

    const toggleMultiSelect = (event) =>{
        event.preventDefault();
        setEnabled(!enabled);
    };

    return (
        <div className="c-multi-select-dropdown">
            <div className="c-multi-select-dropdown__selected" onClick={toggleMultiSelect}>
                <div> {selected.length} selected </div>
                <img src="../../static/mapstore/img/PlanetBasemapPlugin/chevron-down.svg" style={{paddingBottom: "4px"}}></img>
            </div>
            {enabled ? <ul className="c-multi-select-dropdown__options">
                {options.map(option => {
                    const isSelected = selected.includes(option.id);
                    const isDisabled = selected.length >= maxSelected && isSelected === false;
                    return (
                        <li className="c-multi-select-dropdown__option" onClick={() => isDisabled ? null : toggleOption({ id: option.id })}>
                            <input type="checkbox" checked={isSelected} disabled={isDisabled} className="c-multi-select-dropdown__option-checkbox"></input>
                            <span>{option.title}</span>
                        </li>
                    );
                })}
            </ul> : null}
        </div>
    );
};

