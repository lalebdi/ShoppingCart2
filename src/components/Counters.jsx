import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {
// I moved the state and all the methods that modify the state from this component to its parent that is App component. 
    //     state ={
//         counters : [
//             {id : 1, value: 4 },
//             {id : 2, value: 0 },
//             {id : 3, value: 0 },
//             {id : 4, value: 0 }
//         ]
//     };

// // a new event handler to raise an event so we can have a single source of truth
// handleIncrement = counter => {
//     // console.log(counter)
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter)
//     counters[index]= {...counter};
//     counters[index].value++;
//     // console.log(this.state.counters[0])
//     this.setState({ counters });
// };

//     handleRest = () => {
//         const counters = this.state.counters.map(c => {
//             c.value =0;
//             return c;
//         });
//         this.setState({ counters }); 
//     };

//     handleDelete = (counterId) => {
//         // console.log('Event Handler Called'. counterId)
//         const counters = this.state.counters.filter( c => c.id !== counterId);
//         this.setState({counters});

//     };
// You added this ^ function here and  then added it to the <Counter> and on the Counter.jsx called it as an attribute in the onClick.
// SO basicaLLY, the counter component is raising an event and its parent Counters is handling the event.
// To update the state you need to add a counter parameter in the function above so we know which counter we need to remove from the list.
    render() {
        // I am destructuring below
        const {onReset , counters, onDelete , onIncrement} = this.props;
        return (
            <div>
                <button onClick = {onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter => 
                <Counter // what is happenening here is that the counter component is raising the methods.
                key={counter.id} // the reason why the key and id have the same values is that key is used internally by react to access it in the counter component. that's why we had to pass id as a prop and read it in this.props.id .
                // value={counter.value} 
                onDelete= {onDelete} 
                onIncrement = {onIncrement}
                // id = { counter.id}
                counter={counter} // counter replaced id and value in case in the futer we need to add more to the counter it will be counted without the need to add a new attribute.
                /> )}
            </div>
        )
    }
}


export default  Counters