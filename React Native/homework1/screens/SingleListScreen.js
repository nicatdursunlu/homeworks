import React from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    FlatList, 
    Image, 
} from 'react-native';

import { CustomText, SingleListCard } from '../components';

import { getShopList, changeBuyStatus, resetProduct } from '../redux/data';
import { connect } from 'react-redux';
import COLORS from '../styles/colors';
import images from '../styles/images';

const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
});

export const SingleListScreen = connect(mapStateToProps, {
    changeBuyStatus,
    resetProduct
})((props) => {
    const { route, navigation, changeBuyStatus, resetProduct } = props;
    
    const products = route.params.products;
    const title = route.params.title;
    const productsCount = products.length;
    const boughtProductCount = products.filter((product) => product.bought === true).length;
    const id = route.params.shopListID;
    const singleList = props.shopLists.find((item) => item.id === id);
    

    //const navigation = useNavigation();
    //console.log("navigation:  ", navigation);
    //console.log("product:  ", product);
    //console.log("boughtProductCount:  ", boughtProductCount);
    //console.log("singleListType:  ", singleList.type);

    const toggleForBuy = (shopListID, productID) => {
        changeBuyStatus({ shopListID, productID });
    };

    const resetBtnHandler = () => {
        resetProduct({ singleListID: singleList.id });
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.arrowBackBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Image style={styles.arrowBackIcon} source={images.arrowBack} />
                </TouchableOpacity>
                <CustomText weight="medium" style={styles.title} numberOfLines={1}>
                    {title}
                </CustomText>
                <TouchableOpacity
                    style={styles.editBtn}
                    onPress={() => navigation.navigate("AddProductToListScreen", { 
                        singleList
                    })}
                >
                    <Image style={styles.editIcon} source={images.edit} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                <View style={styles.resetRow}>
                    {singleList.type === "regular" ? (
                        <TouchableOpacity style={styles.resetBtn} onPress={resetBtnHandler}>
                            <CustomText weight="bold" style={styles.resetBtnTitle}>
                                Reset
                            </CustomText>
                        </TouchableOpacity>
                        ) : (
                        <CustomText></CustomText>
                    )}
                    <CustomText style={styles.productsCount}>
                        {boughtProductCount} / {productsCount}
                    </CustomText>
                </View>
                <FlatList
                    data={singleList.products}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <SingleListCard
                            name={item.name}
                            count={item.count}
                            unit={item.unit}
                            bought={item.bought}
                            onLongPress={() => toggleForBuy(singleList.id, item.id)}
                            listType={singleList.type}
                        />
                    )}
                />
            </View>
        </View>
       
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: "row",
        height: 116,
        backgroundColor: COLORS.main,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: "white",
        textAlign: 'center',
    },
    arrowBackBtn: {
        position: 'absolute',
        zIndex: 3,
        left: 1,
    },
    arrowBackIcon: {
        height: 18,
        width: 23,
        marginLeft: 20,
    },
    editBtn: {
        position: 'absolute',
        right: 1,
    },
    editIcon: {
        marginRight: 20,
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
    resetRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 10,
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
        textAlign: 'center',
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