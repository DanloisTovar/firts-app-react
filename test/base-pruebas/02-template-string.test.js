// importar archivo a importar:
import {
    getSaludo,
    miNombre,
} from '../../src/base-pruebas/base-pruebas/02-template-string';

describe('Pruba de template string clase 02', () => {
    test('Verificar que la funcion getSaludo diga "Hola Danlois"', () => {
        const nombre = 'Danlois';
        const saludo = getSaludo('Danlois');

        console.log(getSaludo('Danlois'));

        expect(saludo).toBe(`Hola ${nombre}`);
    });
});

describe('Prueba de nombre', () => {
    test('Verificar que el nombre sea igual a Fernando"', () => {
        const nombre = 'Fernando';
        const miName = miNombre('Fernando');

        expect(miName).toBe(nombre);
    });
});
