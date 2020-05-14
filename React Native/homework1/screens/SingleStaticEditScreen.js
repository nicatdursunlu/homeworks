import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { CustomText, CustonButton } from '../components';
import { Header } from '../commons';


import { getShopList } from '../redux/data';
import { connect } from 'react-redux';
import COLORS from '../styles/colors';
import images from '../styles/images';

const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
});



export const SingleStaticEditScreen = connect(mapStateToProps)((props) => {

    const { navigation, shopLists, products } = props;



    return(
        <ScrollView style={styles.container}>
            <Header 
                title="Edit Screen" 
                menu={false}
                edit={true}
            />
            <View style={styles.body}>
                <TouchableOpacity style={styles.resetBtn}>
                    <CustomText weight="bold" style={styles.resetBtnTitle}>
                        Reset
                    </CustomText>
                </TouchableOpacity>
                {shopLists.map((list) => (
                    <View key={list.id} style={styles.list}>
                        <FlatList 
                            data={list.products}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => (
                                <View key={item.id} style={styles.productsList}>
                                    <CustomText style={styles.name}>{item.name}</CustomText>
                                    <View style={styles.row}>
                                        <CustomText style={styles.count}>x{item.count}</CustomText>
                                        <CustomText style={styles.unit}>{item.unit}</CustomText>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                ))}
            </View>
        </ScrollView>
       
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        paddingTop: 10,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "white",
        marginTop: -24,
        paddingHorizontal: 16,
    },
    resetBtn: {
        backgroundColor: COLORS.main,
        borderRadius: 50,
        marginTop: 10,
        width: 100,
        marginBottom: 15,
    },
    resetBtnTitle: {
        color: "white",
        fontSize: 10,
        paddingHorizontal: 30,
        paddingVertical: 5,
        textTransform: 'uppercase',
    },
    productsList: {
        borderWidth: 2,
        marginBottom: 10,
        borderColor: COLORS.secondary,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingVertical: 7,
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
        paddingRight: 17,
    }

});