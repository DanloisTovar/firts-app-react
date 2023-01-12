import React from 'react';

//! importar proptypes:
import PropTypes from 'prop-types';

const getResul = (a, b) => {
    return a + b;
};

export const FirstApp = ({ title, subtitulo }) => {
    console.log(title, subtitulo);
    return (
        <>
            <h1>{title}</h1>
            <p>{subtitulo}</p>
            <p>
                {' '}
                El resultado es: <span>{getResul(1, 2)}</span>{' '}
            </p>
        </>
    );
};

// definir proptypes (typo de prop):
FirstApp.propTypes = {
    subtitulo: PropTypes.string,
    title: PropTypes.string.isRequired,
};

// definir props por defecto:
FirstApp.defaultProps = {
    subtitulo: 'No hay subtitulo',
    title: 'No hay titulo',
};
