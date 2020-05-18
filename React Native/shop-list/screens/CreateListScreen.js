import React, { useState, useEffect } from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    Alert,
    Dimensions,
    AsyncStorage,
} from 'react-native';

import COLORS from '../styles/colors';
import { CustomText, CustomField, CustonButton, CustomOption } from '../components';
import { getShopList, addList, getData } from '../redux/data';
import { connect } from 'react-redux';
import images from '../styles/images';

const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
    data: getData(state),
});

export const CreateListScreen = connect(mapStateToProps, {
    addList,
})(({ addList, navigation, data }) => {


    const [type, setType] = useState("regular");

    const [fields, setFields] = useState({
        shopListID: null,
        title: "",
        type: "regular",
    });

    const clearFields = () => {
        setFields({
            title: "",
            type: "regular",
        })
    }

    const fieldChangneHandler = (name, value) => {
        setFields((fields) => ({
            ...fields,
            [name]: value,
        }));
    };

    const createListBtnHandler = (type) => {

        const args = {
            title: fields.title,
            type,
        };

        if(fields.title.trim() !== "") {
            addList(args);
            clearFields();
            if(args.type === "regular") {
                navigation.navigate("Regular List"); 
            }
            else {
                navigation.navigate("One Time List");
            }
        }
        else {
            Alert.alert("Please, fill the gap");
        }
        // console.log("type: ", args.type);
        // console.log( "title: ", args.title)
    };


    useEffect(() => {
        AsyncStorage.setItem("data", JSON.stringify(data));
    }, [])
    
    //const isRegular = type === "regular";

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <CustomText weight="medium" style={styles.title}>
                        New List
                    </CustomText>
                    <TouchableOpacity
                        style={styles.menuBtn}
                        onPress={navigation.toggleDrawer}
                    >
                        <Image style={styles.menuIcon} source={images.menu} />
                    </TouchableOpacity>
                </View>
                <View style={styles.form}>
                    <CustomText style={styles.listName}>List Name</CustomText>
                    <View>
                        <CustomField 
                            placeholder="Something for me"
                            placeholderTextColor="grey" 
                            onChangeText={(val) => fieldChangneHandler("title", val)}
                            style={styles.field} 
                        />
                    </View>
                    <View style={styles.optionsWrapper}>
                        <CustomOption 
                            title="One Time"
                            style={{...styles.options, opacity: type === "oneTime" ? 1 : 0.5 }} 
                            textStyle={{ fontWeight: type === "oneTime" ? "bold" : "400" }}
                            onPress={() => setType("oneTime")}
                        />
                        <CustomOption 
                            title="Regular"
                            style={{...styles.options, opacity: type === "regular" ? 1 : 0.5 }}  
                            onPress={() => setType("regular")}
                            textStyle={{ fontWeight: type === "regular" ? "bold" : "400" }}
                        />
                    </View>
                    <CustonButton 
                        title="Create List" 
                        style={styles.crateBtn}
                        onPress={() => createListBtnHandler(type)}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    header: {
        flexDirection: "row",
        backgroundColor: COLORS.main,
        height: 116,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: "white",
        textAlign: 'center',
        alignItems: 'center',
    },
    menuBtn: {
        position: 'absolute',
        zIndex: 3,
        right: 16,
    },
    menuIcon: {
    
    },
    form: {
        paddingTop: 10,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "white",
        alignItems: "center",  
        marginTop: -24,
        paddingHorizontal: 5,
    },
    listName: {
        textAlign: "center",
        marginHorizontal: 10,
        paddingBottom: 10,
    },
    field: {
        justifyContent: 'center',
        width: Dimensions.get("window").width - 40,
        fontSize: 18,
    }, 
    optionsWrapper: {
        flexDirection: "row",
        width: "92%",
        justifyContent: "space-between",
    },


    options: {
        backgroundColor: COLORS.grey,
        width: 150,
        marginHorizontal: 1,
        paddingVertical: 13,
        borderRadius: 45,
        marginBottom: 15,
        alignItems: 'center',
        width:( Dimensions.get('window').width - 50 ) / 2,
    },
    crateBtn: {
        backgroundColor: COLORS.main,
    },
});


