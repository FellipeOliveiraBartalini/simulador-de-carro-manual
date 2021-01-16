import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

function Velocimetro() {
    return (
        <ReactSpeedometer 
            segments={4}
            minValue={0}
            maxValue={30}
            textColor={"white"}
            valueTextFontSize={21}
            value={18}
            needleColor={"red"}
            maxSegmentLabels={4}
            segmentColors={[
                "green",
                "yellow",
                "orange",
                "red",
            ]}
            customSegmentLabels={[
                {
                    text: "0",
                    position: "INSIDE",
                    color: "#000"
                },
                {
                    text: "10",
                    position: "INSIDE",
                    color: "#000"
                },
                {
                    text: "20",
                    position: "INSIDE",
                    color: "#000"
                },
                {
                    text: "30",
                    position: "OUTSIDE",
                    color: "#000"
                }
            ]}
        />
    )
}

export default Velocimetro
