
export default function MakeArray(i) {
    if (localStorage.getItem("primaryKey" + i) != null) {
        var name = localStorage.getItem("nameInput" + i)
        var telefone = localStorage.getItem("telefoneInput" + i)
        var cpf = localStorage.getItem("cpfInput" + i)
        var email = localStorage.getItem("emailInput" + i)
        return {
            "name": name,
            "cpf": cpf,
            "phone": telefone,
            "email": email,
            "key": i
        }
    } else {
        return null
    }
}




