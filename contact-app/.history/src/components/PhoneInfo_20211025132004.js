import React, { Component } from 'react';

class PhoneInfo extends Component {
    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    render() {
        const { name, phone } = this.props.info;
        
        const style = {
            border: '1px solid black',
            padding: '8px 12px',
            margin: '10px',
        };

        return (
            <div style={style}>
                <p><b>{name}</b>
                <span>{phone}</span></p>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;