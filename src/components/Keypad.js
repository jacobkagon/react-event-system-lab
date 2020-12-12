// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

    handleFocus = () => {
        console.log("Entering password...")
    }




    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.handleFocus}></input>
            </div>
        );
    }
}

export default Keypad;
