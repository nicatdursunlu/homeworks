import React from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    Platform 
} from 'react-native';

import { CustomText } from './CustomText';

export const CustonButton = ({ title, onPress, style, titleStyle = {} }) => {

    const Touchable = 
        Platform.OS === "android" ? TouchableOpacity : TouchableNativeFeedback;

    return(
        <View style={[styles.container, style]}>
            <Touchable onPress={onPress}>
                <View style={[styles.button]}>
                    <CustomText weight="bold" style={{ ...styles.title, ...titleStyle }}>
                        {title}
                    </CustomText>
                </View>
            </Touchable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "92%",
        overflow: "hidden",
        borderRadius: 45,
    },
    button: {
        //backgroundColor: COLORS.main, 
    },
    title: {
        color: "white",
        fontSize: 14,
        textTransform: "uppercase",
        paddingVertical: 14,
        textAlign: "center",
    },
});