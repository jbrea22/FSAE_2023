import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

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
    top: "-75px",
    left: "20px",
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
      <ReactSpeedometer
        width={400}
        minValue={0}
        maxValue={7}
        value={value}
        valueTextFontSize={'40px'}
        paddingHorizontal={20}
        paddingVertical={20}
        needleColor="white"
        needleHeightRatio={.9}
        segments={7}
        labelFontSize={'14px'}
        textColor="white"
        segmentColors={[
          "#b3b3b3",
          "#b3b3b3",
          "#b3b3b3",
          "#b3b3b3",
          "#b3b3b3",
          "#b3b3b3",
          "red"
        ]}
      />
      <div style={styles.title}>{title}</div>
      <div style={styles.title2}>{title2}</div>
    </div>
  );
};

export default Tachometer;