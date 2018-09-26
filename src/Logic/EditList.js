

export default function editList(cpf) {
    var jsonData = JSON.parse(localStorage.getItem("dataJson"))
    var findIndex = jsonData.map(function (item) { return item.cpf; }).indexOf(cpf);
    return jsonData[findIndex]
}
