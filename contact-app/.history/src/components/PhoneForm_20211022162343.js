import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: '',        
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    render() {
        return (
            <div>
                <form>
                    <input />
                </form>
            </div>
        );
    }
}

export default PhoneForm;