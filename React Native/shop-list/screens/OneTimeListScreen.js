import React from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    Image, 
    Alert, 
    ScrollView 
} from 'react-native';

import { ShopListCard, CustomText } from '../components';
import { getShopList, deleteList } from '../redux/data';
import images from '../styles/images';
import COLORS from '../styles/colors';

import { connect } from 'react-redux';
import { Container } from '../commons';


const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
});

export const OneTimeListScreen = connect(mapStateToProps, {
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
                            .filter((item) => item.type === "One Time")
                            .map((item) => (
                                <ShopListCard 
                                    key={item.id} 
                                    item={item}
                                    shopListName={item.title}
                                    shopListID={item.id}
                                    listType="One Time"
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