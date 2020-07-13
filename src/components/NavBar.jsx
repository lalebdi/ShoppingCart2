import React, { Component } from 'react'

// Stateless functional component because there's only single render method, no event handlers, no helper methods to claculate values and no state. 
// personal choice. 
// you needv to add props as a parameter and remove "this."
// props was removed from being a parameter due to destructuring. it's not needed here but in big projects it can be necessay to avoid repition.
//  You can't use lifecycle hooks in a functional component

const NavBar = ({totaCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
         Navbar {" "}
         <span className = "badge badge-pill badge-secondary">
            {totalCounters}
        </span>
            </a>
        </nav>
    );
};

export default  NavBar;