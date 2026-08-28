const test = require('node:test');
const assert = require('node:assert');
const validarCPF = require('./pessoaFisica');

test('CPF com 11 números deve ser válido', () => {
    assert.strictEqual(validarCPF('12345678901'), true);
});

test('CPF com menos de 11 números deve ser inválido', () => {
    assert.strictEqual(validarCPF('123456789'), false);
});