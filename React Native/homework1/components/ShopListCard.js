import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { CustomText } from './CustomText';
import COLORS from '../styles/colors';
import { useNavigation } from '@react-navigation/native';

export const ShopListCard = ({ list, shopListID,
    //navigation 
}) => {

    const { title, products } = list;
    const productsCount = products.length;

    const navigation = useNavigation();

    return(
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => navigation.navigate("SingleStaticEditScreen", { shopListID })}
        > 
            <View style={styles.row}>
                <CustomText weight="bold" style={[styles.title, { marginTop: 16, }]}>
                    {title}
                </CustomText>
                <CustomText weight="medium" style={styles.count}>
                    {productsCount}
                </CustomText>
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
        width: 380,
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
    }
});