import React, { Component } from 'react';
import NavBar from './components/NavBar.jsx'
import './App.css';
import Counters from './components/Counters.jsx'

class App extends Component() {
  state ={
    counters : [
        {id : 1, value: 4 },
        {id : 2, value: 0 },
        {id : 3, value: 0 },
        {id : 4, value: 0 }
    ]
};
constructor (props){
  super(props);

};
// a new event handler to raise an event so we can have a single source of truth
handleIncrement = counter => {
// console.log(counter)
const counters = [...this.state.counters];
const index = counters.indexOf(counter)
counters[index]= {...counter};
counters[index].value++;
// console.log(this.state.counters[0])
this.setState({ counters });
};

handleRest = () => {
    const counters = this.state.counters.map(c => {
        c.value =0;
        return c;
    });
    this.setState({ counters }); 
};

handleDelete = (counterId) => {
    // console.log('Event Handler Called'. counterId)
    const counters = this.state.counters.filter( c => c.id !== counterId);
    this.setState({counters});

};
  render(){
  return (
      <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter(c => c.value >0 ).length}/>
      <main className="container">
        {/* want to modify Counters  to raise events (reset, delete and increment) */}
        <Counters 
        counters = {this.state.counters}
        onReset = {this.handleRest}
        onIncrement = {this.handleDelete}
        onDelete={this.handleDelete} />
      </main>
      </React.Fragment>
  );
}
}

export default App;
