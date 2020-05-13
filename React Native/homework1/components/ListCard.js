import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { CustomText } from './CustomText';
import COLORS from '../styles/colors';

export const ListCard = ({ item: { title } }) => {


    return(
        <TouchableOpacity>
            <View style={styles.singleCard}>
                <CustomText weight="bold" style={styles.title}>
                    {title}
                </CustomText>
            </View>  
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    singleCard: {
        borderWidth: 2,
        borderColor: COLORS.secondary,
        borderRadius: 10,
        paddingVertical:  10,
        width: 350,
        marginBottom: 15,
    },
    title: {
        fontSize: 18,

    }

});