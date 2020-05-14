import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import { CustomText } from './CustomText';
import { getShopList } from '../redux/data';
import { connect } from 'react-redux';
import COLORS from '../styles/colors';
import images from '../styles/images';

const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
});

export const ProductsCard = connect(mapStateToProps)((props) => {

    const { navigation, shopLists, products } = props;
    console.log("ProductsCard: ", shopLists);
    console.log("Products: ", products);

    return(
        
            <View style={styles.container}>
                {shopLists.map((list) => (
                    <View key={list.id} style={styles.list}>

                        <FlatList 
                            data={list.products}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => (
                                <View key={item.id} style={styles.productsList}>

                                    <View style={styles.row}>
                                        <TouchableOpacity style={styles.editBtn}>
                                            <Image style={styles.editImg} source={images.edit} />
                                        </TouchableOpacity>
                                        <CustomText style={styles.name}>{item.name}</CustomText>
                                    </View>

                                    <View style={styles.row}>
                                        <View style={styles.row}>
                                            <CustomText style={styles.count}>x{item.count}</CustomText>
                                            <CustomText style={styles.unit}>{item.unit}</CustomText>
                                        </View>
                                        <TouchableOpacity style={styles.closeBtn}>
                                            <Image style={styles.closeImg} source={images.close} />
                                        </TouchableOpacity>  
                                    </View>
                                    
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
    productsList: {
        borderWidth: 2,
        //marginTop: 10,
        marginBottom: 10,
        borderColor: COLORS.secondary,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    editBtn: {
        backgroundColor: COLORS.secondary,
        borderRadius: 35,
        padding: 10,
    },
    editImg: {
        padding: 10,
        width: 17,
        height: 17,
    },
    closeBtn: {
        backgroundColor: COLORS.main,
        borderRadius: 35,
        padding: 10,
        marginLeft: 14,
    },
    closeImg: {
        padding: 10,
        width: 20,
        height: 20,
    },
    name: {
        paddingLeft: 17,
        fontSize: 14,
    },
    count: {
        fontSize: 14,
        paddingRight: 3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        
    }

});
