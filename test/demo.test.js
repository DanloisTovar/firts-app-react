// prueba funcionamiento:
describe('Pruba de funcionamiento de Jest', () => {
    test('Primer test prueba(la prueba no debe fallar!!!)', () => {
        // 1. inicilalizacion:
        const messaje = 'Hola mundo';
        // 2. estimulo:
        const messaje2 = messaje.trim();
        // 3. Observamos comportamiento (lo esperado):
        expect(messaje).toBe(messaje2);
    });
});
