import React, { useState, useContext } from 'react';
import { 
    View, 
    StyleSheet, 
    AsyncStorage, 
    TouchableWithoutFeedback, 
    Keyboard, 
    TouchableOpacity, 
    Image,
    Alert,
    Dimensions
} from 'react-native';

import { CustomText, CustomField, CustonButton } from '../components';
import COLORS from '../styles/colors';
import { getUser, changeUser } from '../redux/data';
import { connect } from 'react-redux';
import images from '../styles/images';

const mapStateToProps = (state) => ({
    user: getUser(state),
});


export const UserSettingsScreen = connect(mapStateToProps, { 
    changeUser,
})((props) => {

    const { changeUser, navigation } = props;

    const [fields, setFields] = useState({
        username: "",
        imgUrl: "",
    });

    const saveChangesBtnHandler =  () => {

        const args = {
            username: fields.username,
            imgUrl: fields.imgUrl,
        };

        if(fields.username.trim() === "") {
            Alert.alert("Please, write your username");
            return;
        }
        if(fields.imgUrl.trim() === "") {
            Alert.alert("Please, drope the link of you avatar image");
            return;
        }
        else {
            changeUser(args);
            Alert.alert("Your changes are saved");
        }
        
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
                    <View style={styles.header}>
                        <CustomText weight="medium" style={styles.title}>
                            User Settings
                        </CustomText>
                        <TouchableOpacity
                            style={styles.menuBtn}
                            onPress={navigation.toggleDrawer}
                        >
                            <Image style={styles.menuIcon} source={images.menu} />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.form}>
                        <CustomText weight="medium" style={styles.usernameText}>
                            username
                        </CustomText>
                        <View>
                            <CustomField 
                                style={styles.field} 
                                placeholder="username"
                                placeholderTextColor="grey"
                                value={fields.username}
                                onChangeText={(val) => fieldChangneHandler("username", val)}
                            />
                        </View>
                        <CustomText weight="medium" style={styles.usernameText}>
                            avatar url
                        </CustomText>
                        <View>
                            <CustomField 
                                style={styles.field} 
                                placeholder="avatar url"
                                placeholderTextColor="grey"
                                value={fields.imgUrl}
                                onChangeText={(val) => fieldChangneHandler("imgUrl", val)}
                            />
                        </View>
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
    form: {
        marginTop: 20,
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
        //width: 320,
        width: Dimensions.get("window").width - 40,
        //marginRight: 100,
    }, 
    btn: {
        backgroundColor: COLORS.main,
    }
});