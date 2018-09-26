export default function MaskInput(value, type) {

    if (type === "name") {
        return MaskName(value);
    } else if (type === "cpf") {
        return MaskCpf(value);
    } else if (type === "telefone") {
        return MaskTelefone(value);
    } else if (type === "email") {
        return MaskEmail(value);
    }
}
function MaskName(value) {
    var regex = /[^A-Z^a-z^ ]/g;
    value = value.replace(regex, "")
    return value;
}
function MaskCpf(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf

}
function MaskTelefone(tel) {
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length === 9) {
        tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length === 10) {
        tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length === 11) {
        tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length === 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    }
    return tel;

}
function MaskEmail(value) {
    //mask de email
    return value;
}