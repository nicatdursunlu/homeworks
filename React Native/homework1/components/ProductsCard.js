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

export const ProductsCard = connect(mapStateToProps)(({
    deleteProduct,
    editProduct,
    products
}) => {
    
    //console.log("shopLists: ", shopLists);
    //console.log("products: ", products);

    return(
        <View style={styles.container}>
            <FlatList 
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View key={item.id} style={styles.productsList}>
                        <View style={styles.row}>
                            <TouchableOpacity  
                                style={styles.editBtn}
                                onPress={() => editProduct(item)}
                            >
                                <Image style={styles.editImg} source={images.edit} />
                            </TouchableOpacity>
                            <CustomText style={styles.name}>{item.name}</CustomText>
                        </View>
                        <View style={styles.row}>
                            <CustomText style={styles.count}>x{item.count}{"  "}{item.unit}</CustomText>
                            <TouchableOpacity 
                                style={styles.closeBtn}
                                onPress={() => deleteProduct(item.id)}
                                //onPress={() => console.log(item.id)}
                            >
                                <Image style={styles.closeImg} source={images.close} />
                            </TouchableOpacity>  
                        </View>
                    </View>
                )}
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
