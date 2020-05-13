import React, { useState, useContext } from 'react';
import { 
    View, 
    StyleSheet, 
    AsyncStorage, 
    TouchableWithoutFeedback, 
    Keyboard 
} from 'react-native';

import { CustomText, CustomField, CustonButton, MenuHeaderIcon } from '../components';
import { Header } from '../commons';
import COLORS from '../styles/colors';

export const UserSettingsScreen = () => {

    const [fields, setFields] = useState({
        username: "",
        imgUrl: "",
    });

    const saveChangesBtnHandler =  () => {
        console.log("username: ", fields.username);
        console.log("img: ", fields.imgUrl);
    };

    const fieldChangneHandler = (name, value) => {
        setFields((fields) => ({
            ...fields,
            [name]: value,
        }));
    };

    
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.horizontal}>
                    <Header title="User Settings" menu={false} />
                    <View style={styles.form}>
                        <CustomText weight="medium" style={styles.usernameText}>
                            username
                        </CustomText>
                        <CustomField 
                            style={styles.field} 
                            placeholder="username"
                            placeholderTextColor="black"
                            value={fields.username}
                            onChangeText={(val) => fieldChangneHandler("username", val)}
                        />
                        <CustomText weight="medium" style={styles.usernameText}>
                            avatar url
                        </CustomText>
                        <CustomField 
                            style={styles.field} 
                            placeholder="avatar url"
                            placeholderTextColor="black"
                            value={fields.imgUrl}
                            onChangeText={(val) => fieldChangneHandler("imgUrl", val)}
                        />
                        <CustonButton 
                            title="Save Changes" 
                            style={styles.btn}
                            onPress={saveChangesBtnHandler}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    heading: {
        paddingTop: 22,
        backgroundColor: COLORS.main,
    },
    title: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        paddingVertical: 17,
    },
    form: {
        marginTop: 20,
        alignItems: "center",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: -24,
    },
    usernameText: {

        paddingVertical: 10,
        color: COLORS.dark,
    },
    field: {
        width: 380,
    }, 
    horizontal: {
        //marginHorizontal: 16,
    },
    btn: {
        backgroundColor: COLORS.main,
    }
});