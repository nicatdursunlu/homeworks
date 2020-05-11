import React from "react";
import { Text } from "react-native";

const families = {
  regular: "MontserratRegular",
  medium: "MontserratMedium",
  bold: "MontserratBold",
};

export const CustomText = ({ weight, heading, style, children, ...rest }) => {

    let customStyles = { fontFamily: families[weight] || families.regular };
    if (heading) {
        customStyles.fontFamily = families.bold;
        customStyles.fontSize = 26;
    }
    return (
        <Text {...rest} style={{ ...customStyles, ...style }}>
            {children}
        </Text>
    );
};
