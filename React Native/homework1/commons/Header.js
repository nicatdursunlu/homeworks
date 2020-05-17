import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { CustomText } from '../components';
import COLORS from '../styles/colors';
import images from '../styles/images';

import { useNavigation } from '@react-navigation/native';

export const Header = ({ title, menu = true, back, save, edit }) => {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                {back && (
                    <TouchableOpacity
                        style={styles.iconsWrapper}
                        //onPress={navigation.goBack()}
                    >
                        <Image style={styles.arrowBackIcon} source={images.arrowBack} />
                    </TouchableOpacity>
                )}
                

                <CustomText weight="medium" style={styles.title}>
                    {title}
                </CustomText>

                {menu && (
                    <TouchableOpacity
                        style={styles.iconsWrapper}
                        onPress={navigation.toggleDrawer}
                    >
                        <Image style={styles.menuIcon} source={images.menu} />
                    </TouchableOpacity>
                )}
                
                {save && (
                    <TouchableOpacity
                        style={styles.iconsWrapper}
                        onPress={navigation.toggleDrawer}
                    >
                        <Image style={styles.saveIcon} source={images.save} />
                    </TouchableOpacity>
                )}

                {edit && (
                    <TouchableOpacity
                        style={styles.iconsWrapper}
                        onPress={navigation.toggleDrawer}
                    >
                        <Image style={styles.editIcon} source={images.edit} />
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
    },
    header: {
        flexDirection: "row",
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        color: "white",
        paddingTop: 10,
        paddingBottom: 50,
        textAlign: 'center',
        paddingLeft: 140,
        paddingRight: 90,
    },
    iconsWrapper: {
        paddingVertical: 12,
    },
    arrowBackIcon: {
        height: 18,
        width: 23,
    },
    menuIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});