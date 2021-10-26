import React, { Component } from 'react';

class PhoneInfo extends Component {
    render() {
        const { name, phone, id } = this.props.info;
        
        const style = {
            border: '1px solid black',
            padding: '8px 12px',
            margin: '10px 0',
        };

        return (
            <div style={style}>
                <p><b>{name}</b></p>
                <p>{phone}</p>
            </div>
        );
    }
}

export default PhoneInfo;