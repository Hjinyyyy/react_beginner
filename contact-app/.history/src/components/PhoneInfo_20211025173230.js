import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: ''
    }

    handleToggleEdit = () => {
        // true -> false
            // onUpdate
        // false -> true
            // state 에 info 값들 넣어주기
        const { info, onUpdate } = this.props;
        if (this.state.editing) {
            // true -> false
                // onUpdate
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        } else {
            // false -> true
                // state 에 info 값들 넣어주기
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }

        this.setState({
            editing: !this.state.editing,
        });
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { name, phone } = this.props.info;
        const { editing } = this.state;
        
        const style = {
            border: '1px solid black',
            padding: '8px 12px',
            margin: '10px',
        };

        console.log(name);

        return (
            <div style={style}>
                {/* <p><b>{name}</b>&nbsp;
                <span>{phone}</span></p> */}
                {
                    editing ? (
                        <Fragment>
                            <p>
                                <input
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                            </p>
                            <p>
                                <input
                                    name="phone"
                                    onChange={this.handleChange}
                                    value={this.state.phone}
                                />
                            </p>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <p><b>{name}</b>&nbsp;
                            <span>{phone}</span></p>
                        </Fragment>
                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? '적용' : '수정'}
                </button>
            </div>
        );
    }
}

export default PhoneInfo;