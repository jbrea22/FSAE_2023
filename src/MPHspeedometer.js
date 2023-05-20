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
    top: "0px",
  },
  title: {
    fontSize: "1em",
    color: "#FFF",
    fontWeight: "bold",
    position: "relative",
    top: "-76px",
    left: "19px"
  }
};

const MPHSpeedometer = ({ id, value, title }) => {
  return (
    <div style={styles.dial}>
      <ReactSpeedometer
        width={400}
        ringWidth={60}
        minValue={0}
        maxValue={100}
        value={value}
        valueTextFontSize={'40px'}
        paddingHorizontal={20}
        paddingVertical={20}
        needleColor="#999"
        needleHeightRatio={.9}
        segments={10}
        textColor="white"
        startColor="#ededed"
        endColor="#184296"
      />
      <div style={styles.title}>{title}</div>
    </div>
  );
};
    
export default MPHSpeedometer;
