import React, { StrictMode } from "react";

import ReactDOM from "react-dom/client";

import {App} from './HelloWorldApp';
import {FragmentoApp, FragmentoApp2,VariablesPractica, RetornoFunciones} from './Practicas'
 import { FirstApp } from "./FirstApp";


import { PropTypeComponent , PropsComponent} from "./PracticaPropType";
import { CounterApp } from "./CounterApp";
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        {/* <FirstApp></FirstApp>
       <FragmentoApp></FragmentoApp>
       <FragmentoApp2></FragmentoApp2>
       <VariablesPractica></VariablesPractica>
       <RetornoFunciones></RetornoFunciones>
       <PropsComponent title="Hola soy Beyonder" subtitle={123}></PropsComponent>
       <PropTypeComponent ></PropTypeComponent>  */}
       <CounterApp value={2016} subtitle='Christian'></CounterApp> 
    </React.StrictMode>
);