import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  state = {
    information: [],
  }

  handleCreate = (data) => {
    console.log(data);
    const { information } = this.state;
    this.setState({
      // information: this.state.information.concat(data)
      // information: information.concat(data)
      information: information.concat({
        ...data,
        id: this.id++
      })
    });
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {/* {JSON.stringify(this.state.information)} */}
        <PhoneInfoList data={information} />
      </div>
    )
  }
}

export default App;
