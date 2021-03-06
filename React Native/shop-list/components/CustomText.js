import React from "react";
import { Text } from "react-native";

export const families = {
    regular: "MontserratRegular",
    medium: "MontserratMedium",
    bold: "MontserratBold",
};

export const CustomText = ({ weight, heading, style, children, ...rest }) => {

    let customStyles = { fontFamily: families[weight] || families.regular };
    
    return (
        <Text {...rest} style={{ ...customStyles, ...style }}>
            {children}
        </Text>
    );
};
