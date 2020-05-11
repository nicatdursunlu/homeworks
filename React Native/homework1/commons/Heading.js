import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { CustomText } from '../components';
import COLORS from '../styles/colors';
import images from '../styles/images';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";




export const Heading = ({ heading, menu=true, back = false, save, edit }) => {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={[
                styles.nav,
                { justifyContent: back ? "space-between" : "flex-end" }
            ]}>

                {back && (
                    <TouchableOpacity
                        style={styles.iconsWrapper}
                        onPress={navigation.goBack()}
                    >
                        <Image style={styles.arrowBack} source={images.arrowBack} />
                    </TouchableOpacity>
                )}
                

                <CustomText weight="medium" style={styles.title}>
                    {heading}
                </CustomText>

                {menu && (
                    <TouchableOpacity
                        style={styles.iconsWrapper}
                        onPress={navigation.toggleDrawer}
                    >
                        <Image style={styles.arrowBack} source={images.menu} />
                    </TouchableOpacity>
                )}
                
                {save && (
                    <TouchableOpacity
                        style={styles.iconsWrapper}
                        onPress={navigation.toggleDrawer}
                    >
                        <Image style={styles.icon} source={images.save} />
                    </TouchableOpacity>
                )}
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: COLORS.main,
        alignItems: 'center',
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 50,
    },
    iconsWrapper: {
        paddingVertical: 18,
    },
    arrowBack: {
        height: 18,
        width: 23,
    },
    icon: {
        height: 22,
        width: 22,
    }
});