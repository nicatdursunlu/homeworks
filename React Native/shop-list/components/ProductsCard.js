import React from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';

import { CustomText } from './CustomText';
import { getShopList } from '../redux/data';
import COLORS from '../styles/colors';
import images from '../styles/images';

const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
});

export const ProductsCard = connect(mapStateToProps)(({
    deleteProduct,
    editProduct,
    products,
    singleProductEditState
}) => {

    const currentEditProductID = singleProductEditState.product?.id
    console.log("currentEditProductID ", currentEditProductID);
    return(
        <View style={styles.container}>
            <FlatList 
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const isCurrentEdit = currentEditProductID === item.id;
                    console.log("isCurrentEdit ", isCurrentEdit);
                    return(
                        <View key={item.id} style={styles.productsList}>
                            <View style={styles.row}>
                                <TouchableOpacity onPress={() => editProduct(item)}>
                                    <View 
                                        style={[ 
                                            styles.editBtn, 
                                            { opacity: isCurrentEdit ? 0.5 : 1 }
                                        ]}
                                    >
                                        <Image style={styles.editImg} source={images.edit} />
                                    </View>
                                </TouchableOpacity>
                                <CustomText style={styles.name}>{item.name}</CustomText>
                            </View>
                            <View style={styles.row}>
                                <CustomText style={styles.count}>x{item.count}{"  "}{item.unit}</CustomText>
                                <TouchableOpacity 
                                    style={styles.closeBtn}
                                    onPress={() => deleteProduct(item.id)}
                                >
                                    <Image style={styles.closeImg} source={images.close} />
                                </TouchableOpacity>  
                            </View>
                        </View>
                    )    
                }}
            />
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
        marginBottom: 10,
        borderColor: COLORS.secondary,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "red",
        padding: 10,
        position: "absolute",
        top: -2,
        zIndex: 2,
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
