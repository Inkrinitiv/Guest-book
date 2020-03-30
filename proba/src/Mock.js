import React, {useState} from 'react';
import './App.css';

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
        if (newName.trim()  === "" && newText.trim() === "") {
            return  null;
        }
        else {
            this.setState({
                Mass: [{N: newName, M: newText, id: newId}, ...this.state.Mass]
            }, () => {

                console.log(this.state)
            })
        }
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
                    <input type='Text'
                           placeholder='Введите ваше ФИО' ref={(input)=>{this.Name = input}}
                    />
                    <input type='Text'
                           placeholder='Напишите отзыв' ref={(input)=>{this.Text = input}}/>
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