import React from 'react';
import BatteryGauge from 'react-battery-gauge';

const styles = {
  dial: { 
    top: "-375px",
  }
};

const LowBattery = ({ id, value}) => {
  return (
    <div style={styles.dial}>
      <BatteryGauge
        value={value}
        size={50}
        aspectRatio={.50}
        customization={{
          batteryBody:{
            cornerRadius: 9,
            strokeColor: 'white',
            strokeWidth: 4
          },
          batteryCap:{
            cornerRadius: 2,
            strokeWidth: 4.5,
            strokeColor: "#fff"
          },
          batteryMeter:{
            fill:'red',
            outerGap: 4.5
          },
          readingText:{
            fontSize: 0,
          }
        }}
      />     
    </div>
  );
};

export default LowBattery;