import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
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
        
            <View style={styles.container}>
                <CustomText style={styles.text}>Hello</CustomText>
                {shopLists.map((list) => (
                    <View key={list.id} style={styles.lis}>

                        <FlatList 
                            data={list.products}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => (
                                <View key={item.id} style={styles.list}>
                                    <CustomText>{item.name}</CustomText>
                                </View>
                            )}
                        />


                        {/* {list.products.map((product) => (
                            <View key={product.id} style={styles.list}>
                                <CustomText>{product.name}</CustomText>
                            </View> 
                        ))} */}
                    </View>
                ))}
            </View>
        
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
