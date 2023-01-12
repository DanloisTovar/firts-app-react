import React from 'react';

// !Componentes:
import { FirstApp, CounterApp } from './components';

export const App = () => {
    return (
        <>
            <FirstApp
                title="Hola Mundo!"
                subtitulo="Soy Developer React Full stack"
            />

            <hr />

            <CounterApp titulo="Counter App" valor={0} />
        </>
    );
};
