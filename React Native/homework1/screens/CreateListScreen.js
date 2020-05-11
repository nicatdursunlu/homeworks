import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
} from 'react-native';

import COLORS from '../styles/colors';
import { CustomText, CustomField, CustonButton } from '../components';
import { Heading } from '../commons';
import { getShopList, addList } from '../redux/data';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
});;

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

    const createListBtnHandler = () => {
        if(fields.title.trim() !== "") {
            addList(fields.title);
            navigation.navigate("Regular List");
        }
    };

    
    const isRegular = type === "regular";

    return(
        <View style={styles.container}>
                <Heading heading="New List" />

                <View style={styles.form}>
                    <CustomText style={styles.listName}>List Name</CustomText>
                    <CustomField 
                        placeholder="Something for me" 
                        onChangeText={(val) => fieldChangneHandler("title", val)}
                        style={[styles.field]} 
                    />

                    <View style={styles.optionsWrapper}>
                        <TouchableOpacity 
                            style={styles.options} 
                            onPress={() => setType("One Time")}
                        >
                            <CustomText 
                                style={[
                                    styles.optionsLabel, 
                                    { fontWeight: type === "oneTime" ? "bold" : "400"}
                                ]}
                            >
                                One Time
                            </CustomText>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.options}
                            onPress={() => fieldChangneHandler("shopListID", id)}
                        >
                            <CustomText 
                                style={[
                                    styles.optionsLabel, 
                                    { fontWeight: type === "Regular" ? "bold" : "400"}
                                ]}
                            >
                                Regular
                            </CustomText>
                        </TouchableOpacity>  

                        {/* <CustonButton 
                            title="One Time" 
                            style={styles.options} 
                        />
                        <CustonButton 
                            title="Regular"  
                            style={styles.optionsLabel} 
                        /> */}
                        
                    </View>

                    <CustonButton 
                        title="Create List" 
                        style={styles.crateBtn}
                        onPress={createListBtnHandler}
                    />

                </View>

        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    heading: {
        //paddingTop: 22,
        //backgroundColor: COLORS.main,
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
        //width: 350,
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
    optionsLabel: {
        textAlign: "center",
        color: "grey",
        backgroundColor: COLORS.grey,
    },


    crateBtn: {
        backgroundColor: COLORS.main,
        // borderRadius: 45,
        // width: 380,
    },
    // crateBtnTitle: {
    //     color: "white",
    //     fontSize: 14,
    //     textTransform: "uppercase",
    //     paddingVertical: 14,
    //     textAlign: "center",
    //     textTransform: "uppercase",
    // }

});


