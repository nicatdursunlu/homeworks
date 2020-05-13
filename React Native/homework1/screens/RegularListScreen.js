import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Header } from '../commons';
import { ShopListCard } from '../components';
import { getShopList } from '../redux/data';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
});

export const RegularListScreen = connect(mapStateToProps)((props) => {

    const { navigation, shopLists } = props;
    console.log("ListLayout: ",shopLists);

    return(
        <View style={styles.container}>
            <Header title="Regular Lists" />
            <View style={styles.listWrapper}>
               <View style={styles.list}>
                    {shopLists
                        .filter((list) => list.type === "regular")
                        .map((list) => (
                            <ShopListCard  
                                list={list}
                                navigation={navigation}
                                shopListID={list.id}

                            />
                    ))}
                </View> 
            </View>
        </View>
    );
});

const styles= StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    // heading: {
    //     paddingTop: 22,
    //     backgroundColor: COLORS.main,
    // },
    // title: {
    //     fontSize: 18,
    //     color: "white",
    //     textAlign: "center",
    //     paddingVertical: 17,
    // },

    listWrapper: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: -24,
    },
    list: {
        margin: 16,
    }
});