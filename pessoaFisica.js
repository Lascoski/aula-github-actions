function validarCPF(cpf) {
    if (cpf.length === 11) {
        return true;
    }

    return false;
}

module.exports = validarCPF;