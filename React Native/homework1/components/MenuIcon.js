import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import images from '../styles/images';

export const MenuIcon = () => {
    return(
        <TouchableOpacity
            style={styles.iconsWrapper}
            onPress={navigation.toggleDrawer}
        >
            <Image style={styles.menuIcon} source={images.menu} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menuIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});