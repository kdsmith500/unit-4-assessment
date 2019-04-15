import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles';
import CircleSelector from './components/CircleSelector/CircleSelector';

const toggle = ['', 'selected'];

class App extends Component {
  state = {
    circleSelector1: '',
    circleSelector2: '',
    circleSelector3: '',
    circleSelector4: '',
    circle1: '',
    circle2: '',
    circle3: '',
    circle4: ''
  }

  handleCircleSelector1 = () => {
    if (this.state.circleSelector1 === '') {
      this.setState({ circleSelector1: toggle[1] });
      this.setState({ circle1: toggle[1] });
    } else {
      this.setState({ circleSelector1: toggle[0] });
      this.setState({ circle1: toggle[0] });
    }
  }

  handleCircleSelector2 = () => {
    if (this.state.circleSelector2 === '') {
      this.setState({ circleSelector2: toggle[1] });
      this.setState({ circle2: toggle[1] });
    } else {
      this.setState({ circleSelector2: toggle[0] });
      this.setState({ circle2: toggle[0] });
    }
  }

  handleCircleSelector3 = () => {
    if (this.state.circleSelector3 === '') {
      this.setState({ circleSelector3: toggle[1] });
      this.setState({ circle3: toggle[1] });
    } else {
      this.setState({ circleSelector3: toggle[0] });
      this.setState({ circle3: toggle[0] });
    }
  }

  handleCircleSelector4 = () => {
    if (this.state.circleSelector4 === '') {
      this.setState({ circleSelector4: toggle[1] });
      this.setState({ circle4: toggle[1] });
    } else {
      this.setState({ circleSelector4: toggle[0] });
      this.setState({ circle4: toggle[0] });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            circleSelector1={this.state.circleSelector1}
            circleSelector2={this.state.circleSelector2}
            circleSelector3={this.state.circleSelector3}
            circleSelector4={this.state.circleSelector4}
            handleCircleSelector1={this.handleCircleSelector1}
            handleCircleSelector2={this.handleCircleSelector2}
            handleCircleSelector3={this.handleCircleSelector3}
            handleCircleSelector4={this.handleCircleSelector4}
          />
          <Circles
            circle1={this.state.circle1}
            circle2={this.state.circle2}
            circle3={this.state.circle3}
            circle4={this.state.circle4}
          />
        </main>
      </div>
    );
  }
}

export default App;
