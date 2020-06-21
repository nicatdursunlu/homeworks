import React from 'react';
import { StyleSheet, View, Alert, } from 'react-native';

import { CustomText } from './CustomText';
import { CustonButton } from './CustonButton';
import COLORS from '../styles/colors';

export const ListHeader = ({ resetBtnHandler, singleList }) => {

    const products = singleList.products
    const  type = singleList.type;

    const productsCount = products.length;
    const boughtProductCount = singleList.products.filter(
      (product) => product.bought).length;  

    const onResetPress = () => {
      Alert.alert("Reset list", "Are you sure?", [
        {
            text: "No",
            style: 'cancel',
        },
        {
            text: 'Yes, reset',
            onPress: resetBtnHandler,
        },
      ]);
    };

    return(
        <View style={styles.row}>
          <View>
            {type === "Regular" && (
                <CustonButton 
                  title="Reset" 
                  style={styles.reset}
                  titleStyle={{ fontSize: 10, color: 'white' }}
                  onPress={onResetPress}
                />
            )}
          </View>
          <CustomText weight="medium" style={styles.progress}>
            {boughtProductCount} / {productsCount}
          </CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    reset: {
      paddingVertical: 3,
      paddingHorizontal: 17,
      height: 18,
      backgroundColor: COLORS.main
    },
    progress: {
      fontSize: 14,
    }
});