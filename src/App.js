import './App.css';
import Tachometer from './tachometer';
import BTSpeedometer from './BTspeedometer';
import MPHSpeedometer from './MPHspeedometer';
import React, {useState,useEffect} from 'react';
import IMDimage from './dashboardIcons/IMDindicator.png';
import AMSimage from './dashboardIcons/AMSindicator.png';
import NormalBattery from './normalBattery';
import LowBattery from './lowBattery';

function AMS(props) {
  // eslint-disable-next-line
  if (props.value != 2) {
    return null;
  }
  // eslint-disable-next-line
  if (props.value == 2) {
    return (
      <img src={AMSimage} alt="AMS indicator"/>
    )
  }
}

function IMD(props) {
  // eslint-disable-next-line
  if (props.value != 2) {
    return null;
  }
  // eslint-disable-next-line
  if (props.value == 2) {
    return (
      <img src={IMDimage} alt="IMD indicator"/>
    )
  }
}  

function BATTERY(props) {
  if (props.value <= 20) {
    return (
      <LowBattery value={props.value}/>
    )
  }else{
    return (
      <NormalBattery value={props.value}/>
    )
  }
}

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    var responseClone;
    fetch('https://github.com/jbrea22/FSAE_2023/blob/b1fc4aadb6373d4686c3e70d3689c7816a06f278/public/testing.json',{}
    )
      .then(function(response){
        responseClone=response.clone();
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      }, function(rejectionReason){
        console.log('Error parsing JSON from response:',rejectionReason,responseClone);
        responseClone.text()
        .then(function(bodyText){
          console.log('Received the following instead of valid JSON:',bodyText);
        });
      });
  }

  useEffect(()=>{
    const intervalId=setInterval(() => {getData()},10);
    return()=>{
      clearInterval(intervalId);
    };
  },[]);

  const textStyle = {
    position: 'absolute',
    top: 29,
    right: 109,
    color: "#fff",
    fontFamily: "Arial",
    fontSize: 21,
    padding: 4,
  }

  return (
    <div className="App">

    {
      data && data.length>0 && data.map((item)=><BTSpeedometer
        id="dial3"
        value={parseInt(item.MotorTemp)}
        title="MOTOR"
      />)
    }

    {
      data && data.length>0 && data.map((item)=><Tachometer
        id="dial1"
        value={(item.MotorSpeed/1000).toFixed(2)}
        title="RPM"
        title2="x1000"
      />)
    }

    {
      data && data.length>0 && data.map((item)=><MPHSpeedometer 
        id="dial2"
        value={parseInt((item.MotorSpeed / 3.25) * 16 * Math.PI * 60 / 63360, 10)}
        title="MPH"
      />) 
    }

    {
      data && data.length>0 && data.map((item)=><BTSpeedometer
        id="dial3"
        value={parseInt(item.BatteryTemp)}
        title="BATTERY"
      />)
    }  

    {
      data && data.length>0 && data.map((item)=><b style={textStyle}>{item.BatteryPct}% </b>)
    }

    <div className="battery">
    {
      data && data.length>0 && data.map((item)=><BATTERY
        value={parseInt(item.BatteryPct)}
      />)
    }
    </div>
    
    {
      data && data.length>0 && data.map((item)=><AMS
        value={item.AMS}
      />)
    }

    {
      data && data.length>0 && data.map((item)=><IMD
        value={item.IMD}
      />)
    }

    </div>
  );
}

export default App;




