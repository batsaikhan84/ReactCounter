import '../App.css';
import { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className = "Container">
        < Counter />
      </div>
    )
  }
}

export default App;
