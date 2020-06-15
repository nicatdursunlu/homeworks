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
  CustomOption,
  RadioGroup,
} from "../components";
import { getShopList, addList } from "../redux/data";
import { createID } from "../utils/createID";

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
  const [type, setType] = useState("regular");

  // const [fields, setFields] = useState({
  //   shopListID: null,
  //   title: "",
  //   type: "regular",
  // });

  const [fields, setFields] = useState(createFormInitialFieldState);

  const LIST_TYPES = ["One Time", "Regular"];

  // const clearFields = () => {
  //   setFields({
  //     title: "",
  //     type: LIST_TYPES[0],
  //   });
  // };

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
        navigation.navigate("AddProductToListScreen", {
          title: fields.title,
          type: fields.type,
          shopListID,
        });
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
      <View style={styles.container}>
        <View style={styles.header}>
          <CustomText weight="medium" style={styles.title}>
            New List
          </CustomText>
        </View>
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
          {/* <View style={styles.optionsWrapper}>
            <CustomOption
              title="One Time"
              style={{
                ...styles.options,
                opacity: type === "oneTime" ? 1 : 0.5,
              }}
              textStyle={{ fontWeight: type === "oneTime" ? "bold" : "400" }}
              onPress={() => setType("oneTime")}
            />
            <CustomOption
              title="Regular"
              style={{
                ...styles.options,
                opacity: type === "regular" ? 1 : 0.5,
              }}
              onPress={() => setType("regular")}
              textStyle={{ fontWeight: type === "regular" ? "bold" : "400" }}
            />
          </View> */}
          <RadioGroup 
            options={LIST_TYPES}
            //contentContainerStyle={styles.topSpacing} 
            value={fields.type}
            onValueChange={(val) => fieldChangeHandler('type', val)}
          />
          <CustonButton
            title="Create List"
            style={styles.crateBtn}
            onPress={createListBtnHandler}
          />
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
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    alignItems: "center",
  },
  menuBtn: {
    position: "absolute",
    zIndex: 3,
    right: 16,
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
    paddingBottom: 10,
  },
  field: {
    justifyContent: "center",
    width: Dimensions.get("window").width - 40,
    fontSize: 18,
  },
  // optionsWrapper: {
  //   flexDirection: "row",
  //   width: "92%",
  //   justifyContent: "space-between",
  // },

  // options: {
  //   backgroundColor: COLORS.grey,
  //   width: 150,
  //   marginHorizontal: 1,
  //   paddingVertical: 13,
  //   borderRadius: 45,
  //   marginBottom: 15,
  //   alignItems: "center",
  //   width: (Dimensions.get("window").width - 50) / 2,
  // },
  crateBtn: {
    backgroundColor: COLORS.main,
    marginTop: 14,
  },
  topSpacing: {
    
  }
});
