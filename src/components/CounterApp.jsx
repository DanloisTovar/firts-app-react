import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ titulo, valor }) => {
    // !useState:
    const [contador, setContador] = useState(valor);

    // !onClickHandlerSuma:
    const onClickHandlerSuma = () => {
        // modificador del estado
        setContador(contador + 1);
        // estado final
        console.log(contador);
    };
    // !onClickHandlerResta
    const onClickHandlerResta = () => setContador(contador - 1);

    // estado final
    console.log(contador);

    const onClickHandlerReiniciar = () => setContador(valor);

    return (
        <>
            <h1>{titulo}</h1>
            <h2>{contador}</h2>
            <button onClick={onClickHandlerSuma}>Contador + 1</button>
            <button onClick={onClickHandlerResta}>Contador - 1</button>
            <button onClick={onClickHandlerReiniciar}>Reiniciar</button>
        </>
    );
};

// configurar proptypes:
CounterApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
};

// configurar props por defecto:
CounterApp.defaultProps = {
    titulo: 'Titulo por defecto',
    valor: 0,
};
