import React, { Component } from 'react';
import './App.css';
import FormPage from "./FormPage/FormPage";
import ListPage from "./ListPage/ListPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Screen extends Component {

    render() {
        return (
            <Router>
                <section className="container">
                    <div className="head">
                        <button><Link to="/register/">Cadastro</Link></button>
                        <button><Link to="/list">Lista</Link></button>

                    </div>
                    <div className="middle">
                        <div className="col-2"></div>
                        <div className="col-6">
                            <Route path="/register/:id?" component={Home} />
                            <Route path="/list" component={List} />
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="foot"></div>
                </section>
            </Router>
        );
    }
}

const Home = () => (
    <div>
        <section ><FormPage editDirect={null} /></section>
    </div>
);

const List = () => (
    <div>
        <section ><ListPage /></section>
    </div>
);

export default Screen;
//          <ListPage />