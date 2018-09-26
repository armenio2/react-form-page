export default function deletList(cpf) {
    var jsonData = JSON.parse(localStorage.getItem("dataJson"))
    var removeIndex = jsonData.map(function (item) { return item.cpf; }).indexOf(cpf);
    jsonData.splice(removeIndex, 1);
    localStorage.setItem("dataJson", JSON.stringify(jsonData));
}