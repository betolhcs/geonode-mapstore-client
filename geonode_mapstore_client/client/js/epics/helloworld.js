import Rx from 'rxjs';

import { CLICK_ON_MAP } from '@mapstore/framework/actions/map'; // Importacao de codigo do mapstore2
import { geraDiminuiContador, geraAumentaContador } from '../actions/helloworld';

// Captura a ação de click no mapa, faz algum processamento e solta outra ação(diminuir contador no caso)
export const diminuirComClickEpic = (action$, store) =>
    action$.ofType(CLICK_ON_MAP)
        .filter(() => store.getState().helloworld.enabled === true) // Pode fazer alguma filtragem
        .switchMap((action) => {
            const tipo = action.type; // pegando valores da acao
            const valor = 1 + 2;
            return Rx.Observable.of(geraAumentaContador(2), geraDiminuiContador(valor));
            // Pode lancar mais de uma acao, seguindo a ordem
        });

export default { // Sempre exportar todos os epics juntos no final
    diminuirComClickEpic,
    // ...
};
