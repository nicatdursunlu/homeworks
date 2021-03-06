import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import COLORS from '../styles/colors';

export const CustomField = ({ 
    placeholder, onChangeText, value, placeholderTextColor, style
}) => {
    return(
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                style={[styles.field, style]}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "65%",
    },
    field: {
        backgroundColor: COLORS.grey,
        borderRadius: 45,
        paddingVertical: 8,
        textAlign: "center", 
        marginBottom: 15,
        fontSize: 18,
    }
});