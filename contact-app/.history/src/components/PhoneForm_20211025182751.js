import React, { Component } from 'react';

class PhoneForm extends Component {
    // input = null
    input = React.createRef();
    
    state = {
        name: '',
        phone: '',     
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.onCreate({
        //     name: this.state.name,
        //     phone: this.state.phone,
        // });
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        });
        this.input.focus();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name" 
                        placeholder="이름"
                        onChange={this.handleChange}
                        value={this.state.name}
                        // ref={ref => this.input = ref}
                        ref={this.input}
                    />
                    <input
                        name="phone"
                        placeholder="전화번호"
                        onChange={this.handleChange}
                        value={this.state.phone}
                    />
                    <button type="submit">등록</button>
                    {/* <div>
                        {this.state.name}&nbsp;{this.state.phone}
                    </div> */}
                </form>
            </div>
        );
    }
}

export default PhoneForm;