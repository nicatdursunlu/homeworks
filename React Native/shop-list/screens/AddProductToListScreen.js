import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    TouchableWithoutFeedback, 
    Keyboard,
    Image,
    Alert, 
    Dimensions,
    AsyncStorage
} from 'react-native';
import { 
    CustomText, 
    CustomField, 
    CustonButton,
    ProductsCard, 
    CustomOption 
} from '../components';
import { 
    getShopList, 
    addProduct, 
    deleteProduct, 
    updateProduct, 
    getData 
} from '../redux/data';
import images from '../styles/images';
import COLORS from '../styles/colors';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
    data: getData(state),
});

export const AddProductToListScreen = connect(mapStateToProps, {
    addProduct,
    deleteProduct,
    updateProduct,
})((props) => {

    const { 
        navigation, 
        shopLists, 
        route, 
        addProduct, 
        deleteProduct, 
        updateProduct 
    } = props;
    const { singleList } = route.params;
    const { products } = shopLists.find((item) => item.id === singleList.id);

    //console.log("singleList:  ", singleList);
    //console.log("products:  ", products);
    //console.log("Title:  ", singleList.title);

    const [productName, setProductName] = useState("");
    const [unit, setUnit] = useState("kg");
    const [count, setCount] = useState(2);
    const [productID, setProductID] = useState("");
    const [isCreate, setIsCreate] = useState(true);

    const clearFields = () => {
        setProductName("");
        setUnit("kg");
        setCount(2);
    };

    const increaseCount = () => {
        setCount((count) => count + 1);
    };

    const decreaseCount = () => {
        if(count > 1) {
            setCount((count) => count - 1);  
        }
    };

    const addToListBtnHandler = (unit) => {

        const args = {
            shopListID: singleList.id,
            name: productName,
            count,
            unit,
            bought: false,
        };

        if(productName.trim() !== "") {
            addProduct(args);
            Alert.alert("","Product seccessfully added to list");
            clearFields();
            //console.log("args:  ", args);
        }
        else {
            Alert.alert("Please, fill the gap");
        }
    };

    const deleteBtnHandler = (productID) => {

        const args = {
            shopListID: singleList.id,
            productID
        };

        Alert.alert(
            "Are you sure you want to delete this product?", 
            "If you delete it, you can not recover it", [
                {
                    text: "No",
                    style: "cancel",
                },
                {
                    text: "Yes",
                    onPress: () => deleteProduct(args),
                }
            ]
        );
    };

    const editBtnHandler = (product) => {
        setProductID(product.id);
        setProductName(product.name);
        setCount(product.count.toString());
        setUnit(product.unit);
        setIsCreate(false);
    };


    const updateBtnHandler = () => {
        const args = {
            shopListID: singleList.id,
            productID,
            name: productName,
            count,
            unit,
        };

        updateProduct(args);
        Alert.alert("Product is updated");
    };

    const cancelBtnHandler = () => {
        clearFields();
        setIsCreate(true);
    };

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.arrowBackBtn}
                        onPress={() => 
                            navigation.navigate(
                                singleList.type === "regular" 
                                    ? "Regular List" 
                                    : "One Time List"
                                )
                            }
                    >
                        <Image style={styles.arrowBackIcon} source={images.arrowBack} />
                    </TouchableOpacity>
                    <CustomText weight="medium" style={styles.title}>
                        {singleList.title}
                    </CustomText>
                    <TouchableOpacity
                        style={styles.saveBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Image style={styles.saveIcon} source={images.save} />
                    </TouchableOpacity>
                </View>

                <View style={styles.form}>
                    <View style={styles.horizontal}>
                        <View style={styles.row}>
                            <CustomText weight="medium" style={styles.name}>
                                position name
                            </CustomText> 
                            <CustomText weight="medium" style={styles.text}>
                                count
                            </CustomText> 
                        </View>

                        <View style={[styles.row, styles.marginTop]}>
                            <CustomField 
                                style={styles.productName} 
                                value={productName}
                                placeholder="product name"
                                onChangeText={setProductName}
                            />
                            <View style={[styles.row, styles.count]}>
                                <TouchableOpacity onPress={decreaseCount}>
                                    <CustomText style={styles.countText} weight="bold">
                                        -
                                    </CustomText>
                                </TouchableOpacity>
                                <TextInput 
                                    style={styles.countInput}
                                    value={count.toString()}
                                    keyboardType="number-pad"
                                    onChangeText={setCount}
                                />
                                <TouchableOpacity onPress={increaseCount}>
                                    <CustomText style={styles.countText} weight="bold">
                                        +
                                    </CustomText>
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style={[styles.row, styles.marginBottom]}>
                            <CustomOption
                                title="pkg"
                                style={{
                                    ...styles.options,
                                    opacity: unit === "pkg" ? 1 : 0.5
                                }}
                                onPress={() => setUnit("pkg")}
                                textStyle={{ 
                                    fontWeight: unit === "pkg" ? "bold" : "400", 
                                    textAlign: 'center' 
                                }}
                            />

                            <CustomOption
                                title="kg"
                                style={{
                                    ...styles.options,
                                    opacity: unit === "kg" ? 1 : 0.5
                                }}
                                onPress={() => setUnit("kg")}
                                textStyle={{ 
                                    fontWeight: unit === "kg" ? "bold" : "400", 
                                    textAlign: 'center' 
                                }}
                            />
                            <CustomOption
                                title="litre"
                                style={{
                                    ...styles.options,
                                    opacity: unit === "litre" ? 1 : 0.5
                                }}
                                onPress={() => setUnit("litre")}
                                textStyle={{ 
                                    fontWeight: unit === "litre" ? "bold" : "400", 
                                    textAlign: 'center' 
                                }}
                            />
                            <CustomOption
                                title="bott"
                                style={{
                                    ...styles.options,
                                    opacity: unit === "bott" ? 1 : 0.5
                                }}
                                onPress={() => setUnit("bott")}
                                textStyle={{ 
                                    fontWeight: unit === "bott" ? "bold" : "400", 
                                    textAlign: 'center' 
                                }}
                            />
                        </View>

                        {isCreate ? (
                            <CustonButton 
                                title="Add to list"
                                style={styles.addBtn} 
                                onPress={() => addToListBtnHandler(unit)}
                            />  
                        ) : ( 
                            <View style={styles.editBtnsWrapper}>
                                <CustonButton 
                                    title="Cancel" 
                                    style={styles.cancelBtn} 
                                    onPress={cancelBtnHandler}
                                />
                                <CustonButton 
                                    title="Update" 
                                    style={styles.updateBtn}
                                    onPress={updateBtnHandler} 
                                />
                            </View> 
                        )}
                    </View> 
                    <View style={styles.border}/>
                </View>
                
                <ProductsCard 
                    products={products} 
                    deleteProduct={deleteBtnHandler}
                    editProduct={editBtnHandler}
                />
            </View>
        </TouchableWithoutFeedback>
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
    saveBtn: {
        position: 'absolute',
        right: 1,
    },
    saveIcon: {
        marginRight: 20,
    },

    form: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'white',
        borderTopStartRadius: 20, 
        borderTopEndRadius: 20,
        marginTop: -24,
        marginBottom: -60,
    },
    horizontal: {
        marginHorizontal: 16,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    marginTop: {
        marginTop: 15,
    },
    marginBottom: {
        marginBottom: 15,
    },
    count: {
        backgroundColor: COLORS.grey,
        borderRadius: 45,
        alignItems: "center",
        height: 40,
        paddingHorizontal: 10,
    },
    productName: {
        fontFamily: "MontserratBold",
        width: Dimensions.get("window").width - 170,
    }, 
    countInput: {
        width: "19%",
        textAlign: 'center',
        //height: "5%",
    },
    countText: {
        paddingHorizontal: 7,
        fontSize: 18,
        fontFamily: "MontserratBold",
    },
    name: {
        fontSize: 12,
        marginLeft: 82,
    },
    text: {
        marginRight: 35,
    },
    options: {
        backgroundColor: COLORS.grey,
        paddingVertical: 15,
        width:( Dimensions.get('window').width - 50 ) / 4,
        borderRadius: 45,
    },
    optionsLabel: {
        fontSize: 12,
        textAlign: 'center',
    },
    button: {
        backgroundColor: COLORS.grey,
        width: "23%",
        color: "red",
    },
    addBtn : {
        width: "100%",
        backgroundColor: COLORS.main,
    },
    editBtnsWrapper: {
        flexDirection: 'row',
    },
    cancelBtn: {
        width: "47%",
        backgroundColor: COLORS.main,
        marginRight: 22,
        opacity: 0.5,
    },
    updateBtn: {
        width: "47%",
        backgroundColor: COLORS.main,
    },
    border: {
        paddingBottom: 21,
        borderBottomColor: "#E5E5E5",
        borderBottomWidth: 2,
    }
});