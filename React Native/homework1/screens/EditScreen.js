import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomText, CustonButton } from '../components';
import { Header } from '../commons';
import COLORS from '../styles/colors';

export const EditScreen = () => {
    return(
        <View style={styles.container}>
            <Header title="Edit Screen" />
            <View style={styles.body}>
                <TouchableOpacity style={styles.resetBtn}>
                   <CustomText weight="bold" style={styles.resetBtnTitle}>Reset</CustomText>
                </TouchableOpacity> 

                <View style={styles.data}>
                    <CustomText style={styles.text}>Pasta</CustomText>
                    <CustomText style={styles.text}>Salt</CustomText>
                    <CustomText style={styles.text}>Tomatoes</CustomText>
                    <CustomText style={styles.text}>Cheese</CustomText>
                </View>  
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        paddingTop: 10,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "white",
        marginTop: -24,
        paddingHorizontal: 5,
    },
    resetBtn: {
        backgroundColor: COLORS.main,
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 16,
        width: 100,
    },
    resetBtnTitle: {
        color: "white",
        fontSize: 10,
        paddingHorizontal: 30,
        paddingVertical: 5,
        textTransform: 'uppercase',
    },
    data: {
        marginTop: 15,
        marginHorizontal: 16,
        //alignItems: 'center',
    },
    text: {
        fontSize: 14,
        borderWidth: 2,
        borderColor: COLORS.secondary,
        borderRadius: 27,
        paddingHorizontal: 21,
        paddingVertical: 8,
        marginBottom: 14,
    }

});