import React, {useState} from 'react';
import axios from 'axios'
import './App.css';
import Vivod_iz_mass from "./Mock";


class State extends React.Component{

    render() {
        return (
            <div>
                <Vivod_iz_mass />
            </div>
        );
    }
}


export default State;