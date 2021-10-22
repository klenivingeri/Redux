import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { clickButton, getDigimon } from './actions';
import './App.css';
import Select from './component/select';

class App extends Component {
  state = {
    inputValue: ''
  }
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  render(){
    
    const {
      clickButton,
      newValue,
      digimons
    } = this.props;
    //getDigimon()
    const { inputValue } = this.state
    console.log(digimons)
    return (
      <div className="App" style={{ paddingTop: '100px'}} >
      <input
        type="text"
        onChange={this.inputChange}
        value={inputValue}
        style={{borderColor: 'white', background: 'silver'}}/>
      <button onClick={ () => clickButton(inputValue) }>
        Clique aqui !
      </button>
      <h1> {newValue} </h1>
      <Select />
      </div>
    );
  }
}
const mapStateToProps = store =>({
  newValue: store.clickState.newValue,
  digimons: store.digimonState.digimons
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton, getDigimon }, dispatch)
export default connect (mapStateToProps, mapDispatchToProps)(App);