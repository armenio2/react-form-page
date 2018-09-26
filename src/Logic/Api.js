export default function save(inputContent) {

    var jsonData = JSON.parse(localStorage.getItem("dataJson"))
    var array = {
        "name": inputContent[0],
        "cpf": inputContent[1],
        "phone": inputContent[2],
        "email": inputContent[3]
    }
    jsonData.push(array)
    localStorage.setItem("dataJson", JSON.stringify(jsonData));


}