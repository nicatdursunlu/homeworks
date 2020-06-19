import React from "react";
import { View, StyleSheet } from "react-native";

import { GLOBEL_STYLES } from "../styles/globalStyles";
import COLORS from "../styles/colors";

export const Container = ({ children, style }) => (
  <View style={styles.container}>
    <View style={[styles.content, style]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.grey,
    borderTopStartRadius: 23,
    borderTopEndRadius: 23,
    paddingTop: GLOBEL_STYLES.PADDING,
  },
});
