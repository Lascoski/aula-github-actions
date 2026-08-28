const test = require('node:test');
const assert = require('node:assert');
const validarCPF = require('./pessoaFisica');

test('CPF inválido deve ser válido', () => {
    assert.strictEqual(validarCPF('123'), true);
});