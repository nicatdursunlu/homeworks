import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';

import { CustomText } from './CustomText';
import COLORS from '../styles/colors';

export const ShopListCard = ({ item, onPress, shopListID, onLongPress }) => {

    const { title, products } = item;
    const productsCount = products.length;

    const width = Dimensions.get("window").width - 70;

    return(
        <TouchableOpacity 
            style={styles.container} 
            onPress={onPress}
            onLongPress={onLongPress}
        > 
            <View style={styles.row}>
                <CustomText 
                    numberOfLines={1} 
                    weight="bold" 
                    style={[styles.title, { marginTop: 16, }]}
                >
                    {title}
                </CustomText>
                <CustomText weight="medium" style={styles.count}>
                    0 / {productsCount}
                </CustomText>
            </View>
            <Progress.Bar 
                style={styles.progressBar}
                progress={0.9} 
                width={width}
                borderWidth={2} 
                height={19}
                borderColor={COLORS.secondary}
                borderRadius={20}
                color={COLORS.secondary}
                unfilledColor={COLORS.grey}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: COLORS.secondary,
        marginBottom: 16,
        borderRadius: 10,
        paddingHorizontal: 20,
        width: Dimensions.get("window").width - 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingTop: 16,
    },
    title: {
        fontSize: 18,
    },
    count: {
        fontSize: 14,
    },
    progressBar: {
        marginBottom: 20,
        borderRadius: 20,
    }
});