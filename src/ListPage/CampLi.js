import React from 'react';
import "./CampLi.css";
import deletList from "../Logic/DeletList";
import FormPage from "../FormPage/FormPage";
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';

class CampLi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editDashboard: false,
            disabled: true,
            toDashboard: false,
            reloadDashboard: false,
            id: props.cpf

        };
        this.editClick = this.editClick.bind(this);
        this.deletClick = this.deletClick.bind(this);
    }

    editClick() {

        this.setState({
            editDashboard: true
        });
    }

    deletClick() {
        var array = this.props.cpf

        deletList(array)
        this.setState({
            editButton: "contentHidden"
        });
    }

    render() {
        return (
            <section className={this.state.editButton}>
                <div className="divList" >
                    <li className="liName">{this.props.name}</li>
                    <li className="liCpf">{this.props.cpf}</li>
                    <li className="liTelefone">{this.props.telefone}</li>
                    <li className="liEmail">{this.props.email}</li>
                    <li className="liEdit">
                        <Link to={{
                            pathname: '/register',
                            search: `?id=${this.props.cpf}`                       
                        }} >
                            Editar
                        </Link>
                    </li>
                    <button className="liDel" onClick={this.deletClick}>X</button>

                </div>
            </section >

        );
    }
}







export default CampLi;