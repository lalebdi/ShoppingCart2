import React, { Component } from 'react'

class Counter extends Component {
componentDidUpdate(prevProps , prevState){
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value){
        // ajax call and get new data from the server
        // with this method we can decide wheather to get data based on the changes on the props 
    }
}

componentWillUnmount(){
    console.log('counter-unMount')
}
//   the state below is deleted so we can have controlled data
    // state = {
    //     value: this.props.counter.value
    // };

    // constructor(){
        // super();
        // this.handleIncrement =  this.handleIncrement.bind(this); //used the bind so I can create a new instence of an object which is the function.
//  arrow function will inheret this so dont need bind().
    // }
// handleIncrement = () => {
//     // handleIncrement (){
//         // console.log('Increment Clicked')
//         // this.state.count++; will not work because it is not aware of the state above.
//         this.setState({value: this.state.value +1})
//         // ^ this method tells react that we are updating the state then it will figure out what part of the state has changed and it will bring the DOM in sync with the virtual DOM.
//     }
// renderTags(){
//     if (this.state.tags.length === 0) return <p>There  are no tags!</p>

    // return <ul>
    // {this.state.tags.map(tag => <li key = {tag}>{ tag }</li>) }
    //         </ul>
    // }
    
    render() {
        // console.log('props' , this.props)
        // used the refractory option in VScode underneath
        // let classes = this.getBadgeClasses();
        // console.log(this.props)

        return (
            <div>
                {/* {this.props.children} ~~ in the counters, split the <Counter> into an opening and closing tag and add a header with #{counter.id} to add numbers to the sections */}
               <span  className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button onClick= {() => this.props.onIncrement(this.props.counter)}
                // {this.handleIncrement} deleted because we delted the method above because we want to get a single source of truth
                
                className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount () {
        const { value : count} = this.props.counter; // to destructure
        return count === 0 ? 'Zero' : count;
    }
}

export default  Counter


//  {this.state.tags.length === 0 && 'Please create a new tag'}
// {this.renderTags()}


// originals of the modified methods above :
/*
getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount () {
        const { value: count } = this.state; // to destructure
        return count === 0 ? 'Zero' : count;
    }
    */