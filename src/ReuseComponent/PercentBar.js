import React from 'react';

const PercentBar = (props) => {

    //variables from props
    const percentVal = props.percentVal;
    const tubeLength = props.typeOfCard == 'long' ? 375 : 160;   

    const tubeHeight = 30;
    const marginVal = 5;

    return (
        <div style={{
            height: `${tubeHeight}` + 'px',
            width: `${tubeLength}` + 'px',
            'background-color': '#e4e4e4',
            'position': 'relative',
            'border-radius': `${tubeHeight/2}` + 'px',
            'margin': `${marginVal}` + 'px'
        }}>
            <div style={{
                position: 'absolute',
                height: '100%',
                width: `${percentVal}` + '%',
                'background-color': '#f3701a',
                'border-radius': `${tubeHeight/2}` + 'px'                                                        
            }}>
            </div>
        </div>
    );
}

export default PercentBar;