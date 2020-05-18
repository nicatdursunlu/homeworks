import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';

import { CustomText } from './CustomText';
import COLORS from '../styles/colors';

export const ShopListCard = ({ item, onPress, listType, onLongPress }) => {

    const { title, products } = item;
    const productsCount = products.length;
    const boughtProductCount = products.filter(
        (product) => product.bought === true).length;

    let progress, isFull = false;
    if(productsCount === 0) {
        progress = 0;
    }
    else {
        progress =  boughtProductCount / productsCount;
        if(progress === 1 && listType === "oneTime") {
            isFull = true;
        }
    }

    const width = Dimensions.get("window").width - 70;

    return(
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
            <View style={{...styles.container, 
                opacity: isFull ? 0.5 : 1,
             }}>
                <View style={{...styles.row}}>
                    <CustomText 
                        numberOfLines={1} 
                        weight="bold" 
                        style={[styles.title, { marginTop: 16, }]}
                    >
                        {title}
                    </CustomText>
                    <CustomText weight="medium" style={styles.count}>
                        {boughtProductCount} / {productsCount}
                    </CustomText>
                </View>
                <Progress.Bar 
                    style={styles.progressBar}
                    progress={productsCount ? progress : 0} 
                    width={width}
                    borderWidth={2} 
                    height={19}
                    borderColor={COLORS.secondary}
                    borderRadius={20}
                    color={COLORS.secondary}
                    unfilledColor={COLORS.grey}
                />
            </View>
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