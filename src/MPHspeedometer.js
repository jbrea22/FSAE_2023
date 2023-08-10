import React from 'react';
import GaugeComponent from 'react-gauge-component'

const styles = {
  dial: {
    display: "inline-block",
    margin: '20px',
    width: `400px`,
    height: `auto`,
    color: "#000",
    padding: "2px",
    position: "relative",
    top: "0px",
  },
  title: {
    fontSize: "1em",
    color: "#fff",
    fontWeight: "bold",
    position: "relative",
    top: "-33px",
    left: "-0.8px"
  }
};

const MPHSpeedometer = ({ id, value, title }) => {
  return (
    <div style={styles.dial}>
      <GaugeComponent
        value={value}
        minValue={0}
        maxValue={70}
        type="radial"
        labels={{
          valueLabel: {
            
            style: {fontSize: "60px", fill: "#fff", 
            textShadow: "white 0px 0px 1px, white 0px 0px 0px, white 0px 0px 0px"}
          },
          markLabel: {
            type: "inner",
            marks: [
              { value: 10 },
              { value: 20 },
              { value: 30 },
              { value: 40 },
              { value: 50 },
              { value: 60 },
              { value: 70 }
            ],
            valueConfig: {
              style: {fontSize: "12px", fill: "#fff", 
            textShadow: "white 0px 0px 0px, white 0px 0px 0px, white 0px 0px 0px"}
            }
          }
        }}
        arc={{
          cornerRadius: 0,
          colorArray: ['#ffffff', '#003366'],
          subArcs: [{ limit: 5 }, { limit: 10 }, { limit: 15 }, { limit: 20 }, 
            { limit: 25 }, { limit: 30 }, { limit: 35}, { limit: 40 }, { limit: 45 }, { limit: 50 }, 
            { limit: 55 }, { limit: 60 }, { limit: 65 },{},],
          padding: 0.02,
          width: 0.3
        }}
        pointer={{
          length: 1,
          width: 10,
          elastic: false,
          animationDuration: 200,
          animationDelay: 0
        }}
      />
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default MPHSpeedometer;
