const name = "name"
const telefone = "telefone"
const cpf = "cpf"
const email = "email"

var nameValue = ""
var telefoneValue = ""
var cpfValue = ""
var emailValue = ""

export default function decidedButtoState(type, value) {

    switch (type) {
        case name:
            nameValue = value

            break;
        case cpf:
            cpfValue = value

            break;
        case telefone:
            telefoneValue = value
            break;
        case email:
            emailValue = value
            break; 
        default: 
        break;
    }



    if (nameValue.length > 3) {
        if (telefoneValue.length > 12) {
            if (cpfValue.length > 13) {
                if (emailValue.length > 9) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } else {
            return true;
        }
    } else {
        return true;
    }
}




