import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";

import COLORS from "../styles/colors";
import {
  CustomText,
  CustomField,
  CustonButton,
  RadioGroup,
} from "../components";
import { getShopList, addList } from "../redux/data";
import { createID } from "../utils/createID";
import { Container } from "../commons";
import { GLOBEL_STYLES } from "../styles/globalStyles";

const mapStateToProps = (state) => ({
  shopLists: getShopList(state),
});

const createFormInitialFieldState = {
  title: '',
  type: 'Regular'
};

export const CreateListScreen = connect(mapStateToProps, {
  addList,
})(({ addList, navigation }) => {
 
  const [fields, setFields] = useState(createFormInitialFieldState);
  const LIST_TYPES = ["One Time", "Regular"];

  const fieldChangeHandler = (name, value) => 
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));

  const createListBtnHandler = () => {
    if (fields.title.trim() !== "") {

      const shopListID = createID();
      addList({ ...fields, shopListID });
      console.log("fields ", fields);
      if (fields.type === "Regular") {
        navigation.navigate("Regular List");
      } else {
        navigation.navigate("One Time List");
      }
    } else {
      Alert.alert("Please, fill the gap");
      return;
    }
    setFields(createFormInitialFieldState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={styles.container}>
        <View style={styles.form}>
          <CustomText style={styles.listName}>List Name</CustomText>
          <View>
            <CustomField
              placeholder="Something for me"
              placeholderTextColor="grey"
              value={fields.title}
              onChangeText={(val) => fieldChangeHandler("title", val)}
              style={styles.field}
            />
          </View>
          <RadioGroup 
            options={LIST_TYPES}
            contentContainerStyle={styles.topSpacing} 
            value={fields.type}
            onValueChange={(val) => fieldChangeHandler('type', val)}
          />
          <CustonButton
            title="Create List"
            style={styles.crateBtn}
            onPress={createListBtnHandler}
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
    paddingHorizontal: GLOBEL_STYLES.PADDING,
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
  },
  field: {
    justifyContent: "center",
    width: Dimensions.get("window").width - 40,
    fontSize: 18,
  },
  crateBtn: {
    backgroundColor: COLORS.main,
    marginTop: 14,
  },
  topSpacing: {
    marginTop: 14,
  }
});
