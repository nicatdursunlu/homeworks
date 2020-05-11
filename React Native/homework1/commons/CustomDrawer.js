import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { CustomText } from '../components/CustomText';
import COLORS from '../styles/colors';
import images from '../styles/images';

export const CustomDrawer = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image style={styles.userImg} source={images.avatarImg} /> 
                <CustomText style={styles.username}>Username</CustomText>  
            </View>  

            <View style={styles.drawerBtnsWrapper}>
                <TouchableOpacity 
                    style={[styles.drawerBtn, styles.drawerFirstBtn]} 
                    onPress={() => navigation.navigate("Add New List", {})} 
                >
                    <CustomText weight="bold" style={styles.drawerBtnLabel}>
                        Add New List
                    </CustomText>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.drawerBtn} 
                    onPress={() => navigation.navigate("One Time List", {})}
                >
                    <CustomText weight="bold" style={styles.drawerBtnLabel}>
                        One Time List
                    </CustomText>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.drawerBtn} 
                    onPress={() => navigation.navigate("Regular List", {})}
                >
                    <CustomText weight="bold" style={styles.drawerBtnLabel}>
                        Regular List
                    </CustomText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.drawerBtn} >
                    <CustomText 
                        weight="bold" style={styles.drawerBtnLabel}
                        onPress={() => navigation.navigate("User Settings", {})}
                    >
                        User Settings
                    </CustomText>
                </TouchableOpacity>
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
        marginTop: 15,
        alignItems: 'center',
    },
    userImg: {
        marginHorizontal: 16,
        width: 50,
        height: 50,
    },
    username: {
        fontSize: 24,
        color: COLORS.dark,
        textAlign: 'center',
        paddingTop: 5,
        paddingLeft: 22,
    },
    drawerBtnsWrapper: {
        flex: 1,
        backgroundColor: COLORS.main,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        marginTop: 16,
        overflow: "hidden",
    },
    drawerBtn: {  
        marginTop: 10,
        paddingHorizontal: 20,      
    },
    drawerFirstBtn: { 
        marginBottom: 21, 
        marginTop: 17, 
    },
    drawerBtnLabel: {
        paddingVertical: 7,
        backgroundColor: "white",
        textAlign: "center",
        color: COLORS.main,
        textTransform: "uppercase",
        borderRadius: 38,
        fontSize: 14,
        alignItems: "center",
    },

});