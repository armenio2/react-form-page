import React from 'react';
import "./ListPage.css";
import CampLi from "./CampLi";
import GetApi from "../Logic/GetApi";

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentes: null,
            apiresponse: null,
            dataListComponents: []
        };
        this.campListApi = this.campListApi.bind(this)
        this.campListApi()
    }

    campListApi() {
        var context = this
        GetApi()
            .then(function (response) {
                var dataJson = JSON.parse(localStorage.getItem("dataJson"));
                var componentes = dataJson.map(function (element) {
                    return <CampLi name={element.name} telefone={element.phone} cpf={element.cpf} email={element.email} />
                })
                context.setState({
                    componentes: componentes
                })
            });
    }

    render() {
        return (
            <ul>
                <div className="divList" >
                    <li className="liName">Name</li>
                    <li className="liCpf">Cpf</li>
                    <li className="liTelefone">Telefone</li>
                    <li className="liEmail">Email</li>
                </div>

                {this.state.componentes}
            </ul>
        );
    }
}

export default ListPage;  
