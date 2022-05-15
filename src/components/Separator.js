import React from 'react';
import {View} from 'react-native';

export default Separator = ({height, width, ...extraProps}) => {
    return (
        <View style={{height, width, ...extraProps}} />
    )
}

Separator.defaultProps = {
    height: 0,
    width: 0,
};