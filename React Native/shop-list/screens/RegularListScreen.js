import React from 'react';
import { View, StyleSheet, Alert,  ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { ShopListCard } from '../components';
import { Container } from '../commons';
import { getShopList, deleteList, getData } from '../redux/data';

const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
    data: getData(state),
});

export const RegularListScreen = connect(mapStateToProps, {
    deleteList
})((props) => {

    const { navigation, shopLists, deleteList, data } = props;

    const deleteListHandler = (shopListID) => {
        Alert.alert(
            "Are you sure you want to delete this list?", 
            "If you delete it, you can not recover it", [
                {
                    text: "No",
                    style: "cancel",
                },
                {
                    text: "Yes",
                    onPress: () => deleteList({ shopListID }),
                }
            ]
        );
    };

    return(
        <Container style={styles.container}>
            <View style={styles.listWrapper}>
                <ScrollView>
                    <View style={styles.list}>
                        {shopLists
                            .filter((item) => item.type === "Regular")
                            .map((item) => (
                                <ShopListCard 
                                    key={item.id} 
                                    item={item}
                                    shopListName={item.title}
                                    shopListID={item.id}
                                    listType="Regular"
                                    onLongPress={() => deleteListHandler(item.id)}
                                    onPress={() => navigation.navigate("SingleListScreen", { 
                                            title: item.title ,
                                            shopListID: item.id, 
                                            products: item.products,
                                        })
                                    }
                                />
                        ))}
                    </View> 
                </ScrollView>
            </View>
        </Container>
    );
});

const styles= StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    list: {
        marginHorizontal: 16,
    }
});