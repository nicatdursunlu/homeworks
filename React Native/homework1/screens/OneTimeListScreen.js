import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';


import COLORS from '../styles/colors';
import { ListLayout } from '../commons';


export const OneTimeListScreen = () => {

    return(
        <ListLayout />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    heading: {
        paddingTop: 22,
        backgroundColor: COLORS.main,
    },
    title: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        paddingVertical: 17,
    },
    card: {
        marginTop: 40,
        alignItems: 'center',
        // borderTopStartRadius: 20,
        // borderTopEndRadius: 20,
    },

});