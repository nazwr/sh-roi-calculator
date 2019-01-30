import React from 'react';
import NumberFormat from 'react-number-format';

const Number = props => {
    let isNumericString = true
    let displayType = 'text'
    let prefixValue = ""
    let suffixValue = ""

    if (props.type === 'input') {
        isNumericString = false
        displayType = 'input'
    }

    if (props.symbol) {
        if (props.symbol === "$") {
            prefixValue = props.symbol
        } else {
            suffixValue = props.symbol
        }
    }

    return(
        <NumberFormat 
            name={props.lookupName}
            displayType={displayType}
            thousandSeparator={true}
            isNumericString={isNumericString}
            prefix={prefixValue}
            suffix={suffixValue}
            onChange={props.onChange}
            defaultValue={props.defaultValue}
            value={props.value}
        />
    )
}

export default Number;