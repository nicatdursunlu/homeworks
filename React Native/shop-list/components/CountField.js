import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { CustomText } from "./CustomText";
import { CustomField } from "./CustomField";

export const CountField = ({ width, onChangeText, value, ...rest }) => {
  const changeHandler = (value) => {
    if (+value < 0 || isNaN(value)) return;
    onChangeText(value);
  };

  const increase = () => changeHandler(+value + 1);
  const decrease = () => changeHandler(+value - 1);


  return (
    <View style={{ width }}>
      <TouchableOpacity style={[styles.btn, styles.minus]} onPress={decrease}>
        <CustomText weight="bold" style={styles.btnText}>
          -
        </CustomText>
      </TouchableOpacity>
      <CustomField
        {...rest}
        keyboardType="number-pad"
        value={value.toString()}
        onChangeText={changeHandler}
      />
      <TouchableOpacity style={[styles.btn, styles.plus]} onPress={increase}>
        <CustomText weight="bold" style={styles.btnText}>
          +
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    height: 42,
    width: 30,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  minus: {
    left: 0,
  },
  plus: {
    right: 0,
  }
});
