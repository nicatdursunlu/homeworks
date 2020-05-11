import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { CustomText } from './CustomText';
import { getShopList } from '../redux/data';
import { connect } from 'react-redux';
import COLORS from '../styles/colors';

const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
});

export const ProductsCard = connect(mapStateToProps)((props) => {

    
    const { navigation, shopLists, products } = props;
    console.log("ProductsCard: ", shopLists);
    console.log("Products: ", products);

    return(
        <ScrollView style={styles.container}>
            <CustomText style={styles.text}>Hello</CustomText>
            {shopLists.map((item) => (
                <View key={item.id} style={styles.list}>
                    {item.products.map((it) => (
                        <View key={it.id} style={styles.list}>
                            <CustomText>{it.name}</CustomText>
                        </View> 
                    ))}
                </View>
            ))}
        </ScrollView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    list: {
        borderWidth: 2,
        marginBottom: 10,
        borderColor: COLORS.secondary,
        borderRadius: 10,
        paddingVertical: 8,
    },
    LIST: {
        marginBottom: 50,
    }
});
