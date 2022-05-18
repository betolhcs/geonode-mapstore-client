import React from 'react';

// Componente de texto de erro
const MensagemDeErro = ({ mostraErro, texto }) => {
    if (mostraErro) {
        return (<>
            <tr>
                <p className="erro">{texto}</p>
            </tr>
        </>);
    }
    return null;
};

export default MensagemDeErro;
