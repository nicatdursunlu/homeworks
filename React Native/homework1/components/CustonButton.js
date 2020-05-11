import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { CustomText } from './CustomText';
import COLORS from '../styles/colors';

export const CustonButton = ({ title, onPress, style }) => {

    return(
        <View style={[styles.container, style]}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <CustomText weight="bold" style={styles.title}>
                        {title}
                    </CustomText>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "92%",
        overflow: "hidden",
        borderRadius: 45,
    },
    button: {
        //backgroundColor: COLORS.main, 
    },
    title: {
        color: "white",
        fontSize: 14,
        textTransform: "uppercase",
        paddingVertical: 14,
        textAlign: "center",
    },
});