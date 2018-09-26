import React from 'react';
import FormInput from "./FormComponents/FormInput";
import FormButton from "./FormComponents/FormButton";
import "./FormPage.css";
import decidedButtoState from "../Logic/DecidedButtoState";
import save from "../Logic/Api"
import { Redirect } from 'react-router'
import editList from "../Logic/EditList";



 
var valueApi = ["", "", "", ""];

class FormPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            nameValid: true,
            cpfValid: true,
            telefoneValid: true,
            emailValid: true,
            toDashboard: false,
            loadButton: "loadingdisabled",
            textButton: "Cadastrar",
        };
        this.nameChange = this.nameChange.bind(this);
        this.cpfChange = this.cpfChange.bind(this);
        this.telefoneChange = this.telefoneChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nameChange(event) {
        valueApi[0] = event.target.value
        this.setState({
            disabled: decidedButtoState("name", event.target.value)
        });
    }

    cpfChange(event) {
        valueApi[1] = event.target.value
        this.setState({
            disabled: decidedButtoState("cpf", event.target.value)
        });
    }

    telefoneChange(event) {
        valueApi[2] = event.target.value
        this.setState({
            disabled: decidedButtoState("telefone", event.target.value)
        });
    }

    emailChange(event) {
        valueApi[3] = event.target.value
        this.setState({
            disabled: decidedButtoState("email", event.target.value)
        });
    }

    handleSubmit(event) {
        save(valueApi)

        this.setState({
            loadButton: "fa fa-circle-o-notch fa-spin",
            textButton: "",
            toDashboard: true
        });
        //event.preventDefault();
    }

    render() {

        if (this.state.toDashboard === true) {
            return <Redirect to='/list' />
        }
        return (
            <div className="FormPage" onSubmit={this.handleSubmit}>
                <form>
                    <div onChange={this.nameChange}><FormInput type="name" label="Nome completo (sem abreviação)" /></div>
                    <div onChange={this.emailChange}><FormInput type="email" label="E-mail" /></div>
                    <div onChange={this.cpfChange}><FormInput type="cpf" label="CPF" /></div>
                    <div onChange={this.telefoneChange}><FormInput type="telefone" label="Telefone" /></div>
                    <div ><FormButton type="submit" disabled={this.state.disabled} loadButton={this.state.loadButton} value="Submit" textButton={this.state.textButton} /></div>
                </form>
            </div>
        );
    }
}

export default FormPage;