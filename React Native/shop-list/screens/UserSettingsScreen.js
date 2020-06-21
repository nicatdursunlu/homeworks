import React, { useState } from 'react';
import { 
    View, 
    StyleSheet,  
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
import { GLOBEL_STYLES } from '../styles/globalStyles';
import { Container } from '../commons';

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
        if(fields.username.trim() === "") {
            Alert.alert("Please, write your username");
            return;
        }
        else {
            changeUser(fields);
            navigation.navigate("One Time List");
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
            <Container style={styles.container}>
                <View style={styles.form}>
                    <View>
                        <CustomField 
                            title="username"
                            contentContainerStyle={styles.field} 
                            placeholder="username"
                            placeholderTextColor="grey"
                            value={fields.username}
                            onChangeText={(val) => fieldChangneHandler("username", val)}
                        />
                    </View>
                    <View>
                        <CustomField 
                            title="avatar url"
                            contentContainerStyle={styles.field} 
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
            </Container>
        </TouchableWithoutFeedback>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: GLOBEL_STYLES.PADDING
    },
    form: {
        alignItems: "center",
        marginTop: -24,
    },
    usernameText: {
        paddingVertical: 10,
        color: COLORS.dark,
    },
    field: {
        width: Dimensions.get("window").width - 40,
        marginTop: 14,
    }, 
    btn: {
        backgroundColor: COLORS.main,
        marginTop: 14,
    }
});