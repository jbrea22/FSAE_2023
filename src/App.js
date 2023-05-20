import './App.css';
import Tachometer from './tachometer';
import BPSpeedometer from './BPspeedometer';
import BTSpeedometer from './BTspeedometer';
import MPHSpeedometer from './MPHspeedometer';
import axios from 'axios';
import React, { Component, } from 'react';
import IMDimage from './dashboardIcons/IMDindicator.png';
import AMSimage from './dashboardIcons/AMSindicator.png';

// Only displays warning light(s) when a fault occurs
function Rendering(props) {
  console.log(props.value);
  if (props.value !== 10) {
      return null;
  }
  if (props.value === 10) {
      return (
        <img src={IMDimage} alt="IMD indicator"/>
      )
  }
}  

class App extends Component{
  state={
    persons:[],
    AMSfault:[],
    IMDfault:[],
  }
 
  getData=()=>{
    // https://mocki.io/v1/b771bbea-0568-4fc9-bf06-1a0c9470cca1
    axios.get('https://mocki.io/v1/b771bbea-0568-4fc9-bf06-1a0c9470cca1').then(res => {
    console.log(res);
    this.setState({ persons: res.data });
    //this.setState({ AMSfault: true });
    //this.setState({ IMDfault: res.data });
    });
  }
  
  componentDidMount(){
    this.getData();
    // the values update every 1000 milliseconds
    this.interval = setInterval(this.getData, 1000);
  }
  
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
    return (
    <div className="App">
      <div className="dials">
      
      <Tachometer
          id="dial1"
          value={this.state.persons.map(test => (test.id))}
          title="RPM"
          title2="x1000"
        />
        
        <MPHSpeedometer 
          id="dial2"
          value={10}
          title="MPH"
        />

        <BTSpeedometer
          id="dial3"
          value={55}
          title="BATTERY TEMP"
        />

        <BTSpeedometer
          id="dial4"
          value={60}
          title="MOTOR TEMP"
        />

        <BPSpeedometer
          id="dial5"
          value={88}
          title="BATTERY"
        />

        <img src={AMSimage} alt="AMS indicator"/>
        <Rendering value={this.state.persons.map(person => (person.id))}/>
        
      </div>
    </div>
  );
}
}

export default App;




