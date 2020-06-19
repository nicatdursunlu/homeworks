import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { CustonButton, CustomText } from '../components';
import { GLOBEL_STYLES } from '../styles/globalStyles';
import COLORS from '../styles/colors';

export const CustomDrawer = ({ username, imgUrl, navigation }) => {

    const navigationButtons = [
        {
            title: "Add new list",
            toScreen: "CreateStack",
            style: styles.createBtnSpacing,
        },
        {
            title: "One time list",
            toScreen: "One Time List",
            params: { type: "One Time" }
        },
        {
            title: "Regular list",
            toScreen: "Regular List",
            params: { type: "Regular" }
        },
        {
            title: "User settings",
            toScreen: "SettingsStack",
        },
    ];


    return(
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image 
                    style={styles.userImg} 
                    source={{
                        uri: imgUrl
                    }}
                /> 
                <CustomText style={styles.username}>{username}</CustomText>  
            </View>  
            
            <View style={styles.navWrapper}>
                {navigationButtons.map(({ title, style = {}, params, toScreen }) => (
                    <CustonButton 
                        key={title}
                        style={{ ...styles.navBtn, ...style }}
                        title={title}
                        titleStyle={styles.navBtnTitle}
                        onPress={() => {
                            navigation.navigate(toScreen, params);
                        }}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfo: {
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: GLOBEL_STYLES.PADDING,
        paddingTop: 20,
        paddingBottom: 10
    },
    userImg: {
        marginTop: 12,
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: COLORS.main
    },
    username: {
        fontSize: 22,
        opacity: 0.65,
        textAlign: 'center',
        paddingLeft: 22,
    },
    navWrapper: {
        flex: 1,
        backgroundColor: COLORS.main,
        padding: GLOBEL_STYLES.PADDING,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        alignItems: 'center',
    },
    navBtn: {
        height: 34,
        backgroundColor: 'white',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navBtnTitle: {
        color: COLORS.main,
    },
    createBtnSpacing : {
        marginBottom: 32,
    }
});