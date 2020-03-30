import React from 'react';
import './App.css';


class MASSIVE extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Mass: [
            { name:'' , msg:'',id:''},
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
                { name:'vv' , msg:'15',id:''},
                { name:'ii' , msg:'16',id:''},
                { name:'vv' , msg:'17',id:''},
                { name:'ii' , msg:'18',id:''},
                { name:'vv' , msg:'19',id:''},
                { name:'ii' , msg:'20',id:''},
                { name:'vv' , msg:'21',id:''},
                { name:'ii' , msg:'22',id:''},
                { name:'vv' , msg:'23',id:''},
                { name:'ii' , msg:'24',id:''},
                { name:'vv' , msg:'25',id:''},
                { name:'ii' , msg:'26',id:''},
                { name:'vv' , msg:'28',id:''},
                { name:'ii' , msg:'29',id:''},
                { name:'vv' , msg:'30',id:''},
                { name:'ii' , msg:'31',id:''},
                { name:'vv' , msg:'32',id:''},
                { name:'ii' , msg:'33',id:''},
                { name:'vv' , msg:'34',id:''},
                { name:'ii' , msg:'35',id:''},
                { name:'vv' , msg:'36',id:''},
                { name:'ii' , msg:'37',id:''},
                { name:'vv' , msg:'38',id:''},
                { name:'ii' , msg:'39',id:''},
                { name:'vv' , msg:'40',id:''},
                { name:'ii' , msg:'41',id:''},
                { name:'vv' , msg:'42',id:''},
                { name:'ii' , msg:'43',id:''},
                { name:'vv' , msg:'44',id:''},
                { name:'ii' , msg:'45',id:''},
                { name:'vv' , msg:'46',id:''},
                { name:'ii' , msg:'47',id:''},
                { name:'vv' , msg:'48',id:''},
                { name:'ii' , msg:'49',id:''},
                { name:'vv' , msg:'50',id:''},
                { name:'ii' , msg:'51',id:''}
            ]}


    }

    onHandleClick(e) {
        e.preventDefault();

        const {Mass} = this.state;
        const newName = this.Name1.value;
        const newOtz = this.Otziv1.value;
        const newId = this.state.Mass.map((obn,i) => obn.id = i )


        this.setState({
            Mass: [...this.state.Mass, {name: newName, msg:newOtz, id: newId }]
        }, ()=> {

            console.log(this.state)
        })

    }


    render() {
        const {Mass} = this.state;

        return (

            <div className='App'>
                <div>
                    <div>

                    </div>
                </div>
                Введите ваше имя

                <div>
                    <input  ref={(input)=>{this.Name1 = input}}
                            type='text' id="newItemInput"
                    />
                </div>
                Оставьте отзыв
                <div className='App-div-pole-otziv'>
                    <textarea ref={(input)=>{this.Otziv1 = input}}
                              className='App-pole-otziv'/>
                </div>
                <div>
                    <button type="Button" onClick={(e) => { this.onHandleClick(e) }}>Send</button>
                </div>
                <div className='App-div-left-background' >
                <div>
                    {Mass.map(vivod=>{
                        return(
                          <div key={this.state.id}>
                              {vivod.name}
                              {vivod.msg}
                          </div>
                        );
                    })}
                </div>
                </div>



            </div>
        );
    }
}

export default MASSIVE;
