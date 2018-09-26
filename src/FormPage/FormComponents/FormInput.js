import React from 'react';
import MaskInput from "../../Logic/MaskInput";
import { matchPath } from 'react-router'
import qs from 'query-string'

const TYPE_NAME = "name"
const TYPE_CPF = "cpf"
const TYPE_TELEFONE = "telefone"
const TYPE_EMAIL = "email"
const inputWrong = {
  color: '#eb4a46',
  borderColor: '#eb4a46'
};
const inputOk = {
  width: "95%",
  border: "none",
  borderBottom: "1px solid",
  borderColor: "#efeeed",
};



class FormInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //value: this.props.content,
      validLabel: "",
    };
    this.handleChange = this.handleChange.bind(this);


    this.getId()
    this.validateInputLength()
    
  }


  getId() {
    var queryStrings = qs.parse(window.location.search)
    if (queryStrings.id !== undefined) {
      var jsonData = JSON.parse(localStorage.getItem("dataJson"))
      var findIndex = jsonData.map(function (item) { return item.cpf; }).indexOf(queryStrings.id);
      switch (this.props.type) {
        case TYPE_NAME:
          this.state.value = jsonData[findIndex].name
          break;
        case TYPE_CPF:
          this.state.value = jsonData[findIndex].cpf
          break;
        case TYPE_TELEFONE:
          this.state.value = jsonData[findIndex].phone
          break;
        case TYPE_EMAIL:
          this.state.value = jsonData[findIndex].email
          break;
        default:
          break;
      }
      //event.preventDefault();
    } else {

    }

  }

  validateInputLength() {
    switch (this.props.type) {
      case TYPE_NAME:
        this.state.maxLength = 50
        break;
      case TYPE_CPF:
        this.state.maxLength = 14
        break;
      case TYPE_TELEFONE:
        this.state.maxLength = 14
        break;
      case TYPE_EMAIL:
        this.state.maxLength = 50
        break;
      default:
        break;
    }
  }

  handleChange(event) {
    var mask = MaskInput(event.target.value, this.props.type)
    this.validInputValue(mask)
    this.setState({
      value: mask
    });

  }

  validInputValue(value) {
    var message
    if (this.props.type === "name") {
      message = this.validNameValue(value)
      this.setState({
        validLabel: message
      });
    } else if (this.props.type === "cpf") {
      message = this.validCpfValue(value)
      this.setState({
        validLabel: message
      });
    } else if (this.props.type === "telefone") {
      message = this.validTelefoneValue(value)
      this.setState({
        validLabel: message
      });
    } else if (this.props.type === "email") {
      message = this.validEmailValue(value)
      this.setState({
        validLabel: message
      });
    }
  }

  validNameValue(value) {
    var size = value.length
    if (size === 0) {
      this.setState({
        inputStyle: inputWrong
      });
      return ""
    } else if (size < 3) {
      this.setState({
        inputStyle: inputWrong
      });
      return "Campo deve conter 3 ou mais dígitos"
    } else {
      this.setState({
        inputStyle: inputOk
      });
    }
  }

  validCpfValue(value) {
    var size = value.length
    if (size === 14) {
      this.setState({
        inputStyle: inputOk,
      });
      return ""
    } else {
      this.setState({
        inputStyle: inputWrong
      });
      return "Campo deve conter 11 dígitos"
    }
  }

  validTelefoneValue(value) {
    var size = value.length
    if (size === 14) {
      this.setState({
        inputStyle: inputOk,
      });
    } else if (size === 13) {
      this.setState({
        inputStyle: inputOk,
      });
      return ""
    } else {
      this.setState({
        inputStyle: inputWrong
      });
      return "O Telefone esta Incorreto"
    }
  }

  validEmailValue(value) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      this.setState({
        inputStyle: inputOk,
      });
      return ""
    }
    this.setState({
      inputStyle: inputWrong
    });
    return "O E-mail esta incorreto"
  }




  render() {
    return (
      <div className="componentFormInput" >
        <label>{this.props.label}</label>
        <input
          style={this.state.inputStyle}
          haduken123={this.props.type}
          maxLength={this.state.maxLength}
          onChange={this.handleChange}
          value={this.state.value}
        ></input>
        <div><span>{this.state.validLabel}</span>
        </div>
      </div>
    );
  }

}



export default FormInput;
