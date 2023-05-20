import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const styles = {
  dial: {
    display: "inline-block",
    margin: '-47px',
    width: `250px`,
    height: `auto`,
    color: "#000",
    padding: "2px",
    position: "relative",
    top: "41px",
    left: "25px"
  },
  title: {
    fontSize: ".7em",
    color: "#FFF",
    fontWeight: "bold",
    position: "relative",
    top: "-200px",
    left: "1px"
  }
};

const BTSpeedometer = ({ id, value, title }) => {
  return (
    <div style={styles.dial}>
      <ReactSpeedometer
        minValue={0}
        maxValue={70}
        value={value}
        width={150}
        needleHeightRatio={.73}
        needleColor="#888"
        segments={7}
        maxSegmentLabels={0}
        ringWidth={30}
        textColor="white"
        segmentColors={[
          "blue",
          "#669cff",
          "#b5dcff",
          "#fff",
          "#ffabb6",
          "#ff6378",
          "red"
        ]}
        // eslint-disable-next-line
        currentValueText="${value}ºC"
      />
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default BTSpeedometer;