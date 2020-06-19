import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import { GLOBEL_STYLES } from '../styles/globalStyles';
import images from '../styles/images';

export const HeaderIcon = ({ iconName, onPress, side }) => {
    return(
        <TouchableOpacity 
            style={[
                styles.wrapper, 
                {
                  marginRight: side === 'right' ? GLOBEL_STYLES.PADDING : 0,
                  marginLeft: side === 'left' ? GLOBEL_STYLES.PADDING : 0
                }
            ]} 
            onPress={onPress}
        >
            <Image style={styles.icon} source={images[iconName] || ''} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: 22,
        height: 22,
    },
    icon: {
        width: '100%',
        height: "100%",
    }
});