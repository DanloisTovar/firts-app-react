import React from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ titulo, valor }) => {
    return (
        <>
            <h1>{titulo}</h1>
            <h2>{valor}</h2>
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
