import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ titulo, valor }) => {
    // !useState:
    const [contador, setContador] = useState(valor);

    // !onClickHandler:
    const onClickHandler = (e) => {
        e.preventDefault();
        // modificador del estado
        setContador(contador + 1);
        // estado final
        console.log(contador);
    };
    return (
        <>
            <h1>{titulo}</h1>
            <h2>{contador}</h2>
            <button onClick={onClickHandler}>Contador + 1</button>
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
