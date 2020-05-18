import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomText } from './CustomText';
import COLORS from '../styles/colors';

export const CustomOption = ({ title, style, onPress, textStyle }) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={style}>    
                <CustomText style={textStyle}>{title}</CustomText>
            </View>    
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    options: {
        backgroundColor: COLORS.grey,
        paddingVertical: 15,
        width: 80,
        borderRadius: 45,
    },
});