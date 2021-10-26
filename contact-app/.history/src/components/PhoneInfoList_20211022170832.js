import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    render() {
        const { data } = this.props;
        const list = data.map(
            info => (<PhoneInfo info={info} key={info.id} />)
        );

        return (
            <div>
                
            </div>
        );
    }
}

export default PhoneInfoList;