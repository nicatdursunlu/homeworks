import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import COLORS from '../styles/colors';

export const CustomField = ({ placeholder, onChangeText, value, style}) => {
    return(
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                style={[styles.field, style]}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    // container: {

    // },
    field: {
        backgroundColor: COLORS.grey,
        borderRadius: 45,
        paddingVertical: 8,
        textAlign: "center", 
        marginBottom: 15,
        paddingHorizontal: "32%",
        width: "100%",
    }
});