import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CustomText, CustomField, CustonButton, MenuHeaderIcon } from '../components';
import { Heading } from '../commons';
import COLORS from '../styles/colors';

export const UserSettingsScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.horizontal}>

                <Heading heading="User Settings" />

                <View style={styles.form}>
                    <CustomText weight="medium" style={styles.usernameText}>
                        username
                    </CustomText>
                    <CustomField 
                        style={styles.field} 
                        placeholder="username"
                    />
                    <CustomText weight="medium" style={styles.usernameText}>
                        avatar url
                    </CustomText>
                    <CustomField 
                        style={styles.field} 
                        placeholder="avatar url"
                    />
                    <CustonButton title="Save Changes" />
                </View>
            </View>
        </View>
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
    form: {
        marginTop: 20,
        alignItems: "center",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: -24,
    },
    usernameText: {

        paddingVertical: 10,
        color: COLORS.dark,
    },
    field: {
        width: 380,
    }, 
    horizontal: {
        //marginHorizontal: 16,
    }
});