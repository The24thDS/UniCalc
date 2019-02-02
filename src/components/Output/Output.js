import React from 'react';

const Output = ({chartData, average}) => {
    return(
        <div>
            {average?average:'Media ta va apărea aici'}
        </div>
    )
}

export default Output;