import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SingleListScreen = () => {
    return(
        <View style={styles.coontainer}>
            <Text>HomepageScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    coontainer: {
        backgroundColor: "green",
    }
});