import React from 'react';
import "./FormButton.css";


class FormButton extends React.Component {



  render() {
    return <button className="button" type={this.props.value} disabled={this.props.disabled} ><i class={this.props.loadButton}></i>{this.props.textButton}</button>

  }
}

export default FormButton;
