import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import COLORS from '../styles/colors';
import { CustomText, CustomField, CustonButton } from '../components';
import { Header } from '../commons';
import { getShopList, addList } from '../redux/data';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
});

export const CreateListScreen = connect(mapStateToProps, {
    addList,
})(({ addList, navigation }) => {


    const [type, setType] = useState("regular");

    const [fields, setFields] = useState({
        shopListID: null,
        title: "",
        type: "regular",
    });

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
            if(args.type === "regular") {
                navigation.navigate("Regular List"); 
            }
            else {
                navigation.navigate("One Time List");
            }
        }
    };

    
    const isRegular = type === "regular";

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                    <Header title="New List" menu={false} />
                    <View style={styles.form}>
                        <CustomText style={styles.listName}>List Name</CustomText>
                        <CustomField 
                            placeholder="Something for me"
                            placeholderTextColor="black" 
                            onChangeText={(val) => fieldChangneHandler("title", val)}
                            style={[styles.field]} 
                        />

                        <View style={styles.optionsWrapper}>
                            <TouchableOpacity 
                                onPress={() => setType("oneTime")}
                                style={[styles.options,
                                    { opacity: type === "oneTime" ? 1 : 0.5 }
                                ]} 
                               
                            >
                                <CustomText 
                                    style={
                                        { fontWeight: type === "oneTime" ? "bold" : "400" }
                                    }
                                >
                                    One Time
                                </CustomText>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => setType("regular")}
                                style={[
                                    styles.options,
                                    { opacity: type === "regular" ? 1 : 0.5 }
                                ]}
                                
                            >
                                <CustomText 
                                    style={
                                        { fontWeight: type === "regular" ? "bold" : "400" }
                                    }
                                >
                                    Regular
                                </CustomText>
                            </TouchableOpacity>  
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
    title: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        paddingVertical: 17,
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
        width: 362,
        fontSize: 18,
    }, 
    optionsWrapper: {
        flexDirection: "row",
        width: "92%",
        justifyContent: "space-between",
    },


    options: {
        backgroundColor: COLORS.grey,
        width: "48%",
        marginHorizontal: 1,
        paddingVertical: 13,
        borderRadius: 45,
        marginBottom: 15,
        alignItems: 'center',
    },
    crateBtn: {
        backgroundColor: COLORS.main,
    },
});


