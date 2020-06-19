import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { CustomText, families } from './CustomText';
import COLORS from '../styles/colors';

export const CustomField = ({ 
    title, 
    width, 
    style, 
    contentContainerStyle, 
    ...rest 
}) => {
    return(
        <View style={contentContainerStyle}>
            <CustomText weight="medium" style={styles.title}>
                {title}
            </CustomText>
            <TextInput
                {...rest}
                style={[styles.field, style]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        opacity: 0.5,
        textAlign: "center",
        fontSize: 12,
    },
    field: {
        backgroundColor: COLORS.grey,
        borderRadius: 25,
        paddingHorizontal: 15,
        textAlign: "center", 
        marginTop: 7,
        fontSize: 14,
        fontFamily: families.bold, 
        height: 42, 
    }
});