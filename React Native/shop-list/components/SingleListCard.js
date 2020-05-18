import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';
import COLORS from '../styles/colors';

export const SingleListCard = ({ name, count, unit, onLongPress, bought, listType }) => {

    return(
        <TouchableOpacity 
            onLongPress={onLongPress} 
            disabled={
                (listType === "oneTime" && bought === true) 
                    ? true 
                    : false
            } 
        >
            <View  
                style={{
                    ...styles.productsList,
                    opacity: bought ? 0.3 : 1
                }}
            >
                <CustomText style={styles.name}>{name}</CustomText>
                <CustomText style={styles.info}>x{count}{"  "}{unit}</CustomText>
            </View>
        </TouchableOpacity>
    );
};


export const styles = StyleSheet.create({
    productsList: {
        borderWidth: 2,
        marginBottom: 10,
        borderColor: COLORS.secondary,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingVertical: 7,
    },
    info: {
        fontSize: 14,
        paddingRight: 17,
    },
    name: {
        paddingLeft: 17,
        fontSize: 14,
    },
});