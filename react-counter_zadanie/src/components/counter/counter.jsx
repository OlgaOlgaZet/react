import React from 'react';
import './counter.css';
import ButtonsPanel from '../buttonsPanel/buttonsPanel.jsx';
import { throwStatement } from '@babel/types';
class Counter extends React.Component {

    constructor(props) {
        super(props);
        let initValue = 0;
        let cntV = '';
        if (!isNaN(this.props.initValue)) {
            cntV = parseInt(this.props.initValue);
        } else {
            cntV = this.props.initValue;
        }
        this.state = {
            iStep: 1,
            counterValue: cntV
        }
        this.handleStepChange = this.handleStepChange.bind(this);
    }

    changeValue = () => {
        this.setState( (prevState) => {
        return({
        counterValue: prevState.counterValue + parseInt(this.state.iStep),
        })
        });
      
    }
   
    resetCounter = (resetCounter) => {
        let initValue = 0;
        if (!resetCounter) {
            if (!isNaN(this.props.initValue)) {
                initValue = parseInt(this.props.initValue)
            } 
        }
        this.setState({
            counterValue: initValue,
        })
    }

    handleStepChange (step) {
        this.setState({iStep: step});
        console.log(this.state.iStep)
    }

    render() {
        return(
            <div className="counter">Licznik:
            <span className ='value'>{this.state.counterValue}</span>
        {/* <div className="counter">Licznik: {this.state.counterValueTwo}</div> */}
        <ButtonsPanel changeValue={this.changeValue} resetCounterValue={this.resetCounter} krok={this.state.iStep}/>
        {/* <button onClick={this.changeValueTwo}>B</button> */}
        Krok: <Step onStepChange = {this.handleStepChange} />
    </div>
        )
    }
}
 class Step extends React.Component {
    constructor(props) {
        super(props)
        this.updateStep = this.updateStep.bind(this)
    }
    updateStep() {
        let step = parseInt(this.inputStep.value);
        if (step >= 1) {
            this.props.onStepChange(step);
        } else {
            alert('Liczba musi być większa od 0');
            this.props.onStepChange(1);
            this.inputStep.value = 1;
        }
    }

    render(){
        return <input ref={(input) => {this.inputStep = input}} onChange={this.updateStep} type="number" defaultValue="1"/>

    }
}

export default Counter;
