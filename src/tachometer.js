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
    top: "5px",

  },
  title: {
    fontSize: "1em",
    color: "#FFF",
    fontWeight: "bold",
    position: "relative",
    top: "-37px",
    left: "0px",
  },
  title2: {
    fontSize: ".7em",
    color: "#FFF",
    fontWeight: "bold",
    position: "relative",
    top: "-74px",
    left: "20px",
  }
};

const Tachometer = ({ id, value, title, title2 }) => {
  return (
    <div style={styles.dial}>
      <GaugeComponent
        value={value}
        width={120}
        minValue={0}
        maxValue={7000}
        type="radial"
        labels={{
          valueLabel: {
            matchColorWithArc: true,
            style: {fontSize: "40px", fill: "#fff", 
            textShadow: "white 0px 0px 1px, white 0px 0px 0px, white 0px 0px 0px"}
          },
          markLabel: {
            type: "inner",
            marks: [
              { value: 1000 },
              { value: 2000 },
              { value: 3000 },
              { value: 4000 },
              { value: 5000 },
              { value: 6000 }
            ],
            valueConfig: {
              style: {fontSize: "12px", fill: "#fff", 
            textShadow: "white 0px 0px 0px, white 0px 0px 0px, white 0px 0px 0px"}
            }
          }
        }}
        arc={{
          cornerRadius: 0,
          
          subArcs: [{ limit: 500, color:"#fff" }, { limit: 1000, color:"#fff" }, 
          { limit: 1500, color:"#fff" }, { limit: 2000, color:"#fff" }, 
            { limit: 2500, color:"#fff" }, { limit: 3000, color:"#fff" }, { limit: 3500, color:"#fff"}, 
            { limit: 4000, color:"#fff" }, { limit: 4500, color:"#fff" }, { limit: 5000, color:"#fff" }, 
            { limit: 5500, color:"#fff" }, { limit: 6000, color:"#fff" }, { limit: 6500, color:"#fff"},{color:"#ff0000"},],
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
      <div style={styles.title2}>{title2}</div>
    </div>



  );
};

export default Tachometer;