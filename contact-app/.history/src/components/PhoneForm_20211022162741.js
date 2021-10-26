import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
        phone: '',     
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
                    <input placeholder="이름" onChange={this.handleChange} value={this.state.name} />
                    <input placeholder="전화번호" value={this.state.phone} />
                    {this.state.name}
                </form>
            </div>
        );
    }
}

export default PhoneForm;