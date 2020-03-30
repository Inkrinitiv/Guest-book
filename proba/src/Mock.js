import React, {useState} from 'react';
import axios from 'axios'
import './App.css';

 export  function Dlya_Mass() {
    const newMass = [
        { name:'vv' , msg:'1',id:''},
        { name:'ii' , msg:'2',id:''},
        { name:'vv' , msg:'3',id:''},
        { name:'ii' , msg:'4',id:''},
        { name:'vv' , msg:'5',id:''},
        { name:'ii' , msg:'6',id:''},
        { name:'vv' , msg:'7',id:''},
        { name:'ii' , msg:'8',id:''},
        { name:'vv' , msg:'9',id:''},
        { name:'ii' , msg:'10',id:''},
        { name:'vv' , msg:'11',id:''},
        { name:'ii' , msg:'12',id:''},
        { name:'vv' , msg:'13',id:''},
        { name:'ii' , msg:'14',id:''},
        { name:'vv' , msg:'15',id:''}]
}

class Vivod_iz_mass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {Mass:[
                {N:'A',M:'1',id:'0'},
                {N:'B',M:'2',id:'1'},
                {N:'C',M:'3',id:'2'},
                {N:'D',M:'4',id:'3'},
                {N:'I',M:'5',id:'4'},
                {N:'F',M:'6',id:'5'},
                {N:'G',M:'7',id:'6'},
                {N:'H',M:'8',id:'7'},
                {N:'O',M:'9',id:'8'},
                {N:'Q',M:'10',id:'9'},
                {N:'R',M:'11',id:'10'},
                {N:'L',M:'12',id:'11'}
            ],Memory:5};
    }

    onChange(e){
        e.preventDefault()
        const {Mass} = this.state;
        const newName = this.Name.value;
        const newText = this.Text.value;
        const newId = this.state.Mass.map((obn,i) => obn.id = i )

    this.setState({
        Mass:[ {N:newName,M:newText,id:newId}, ...this.state.Mass]
    }, ()=> {

        console.log(this.state)
    })
    }
    Change_memory(){
        const {Memory} = this.state;

        this.setState({Memory: this.state.Memory + 5}

        , ()=>{
            console.log(Memory)
        })
    }

    render() {
        const {Mass} = this.state;
        const {Memory} = this.state;
        return (
            <div className='App'>
                <div>
                    <input type='Text' ref={(input)=>{this.Name = input}}/>
                    <input type='Text' ref={(input)=>{this.Text = input}}/>
                </div>
                <div>
                    {Mass.map((item,i)=>{
                        if (i < Memory) {
                            return (
                                <div key={i}>
                                    {item.N}
                                    {item.M}
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
                <div>
                    
                </div>
                <div>
                    <button type='Button' onClick={(e) => this.onChange(e)}>
                        Добавить сообщение
                    </button>
                    <button type='Button' onClick={(mem) => this.Change_memory()}>
                        Расширить пулл сообщений на 5
                    </button>
                </div>
            </div>
        );
    }
}
export default Vivod_iz_mass;