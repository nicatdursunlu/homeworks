import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { CustomText, CustomField, CustonButton, ProductsCard } from '../components';
import { Header } from '../commons';
import COLORS from '../styles/colors';

export const AddToListScreen = () => {
    return(
        <View style={styles.container}>

            <Header 
                title="Add to list" 
                back={true}
                save={true}
                menu={false}
            />

            <View style={styles.form}>
                <View style={styles.horizontal}>
                    <View style={styles.row}>
                        <CustomText weight="medium" style={styles.name}>
                            position name
                        </CustomText> 
                        <CustomText weight="medium" style={styles.text}>
                            count
                        </CustomText> 
                    </View>

                    <View style={[styles.row, styles.marginTop]}>
                        <CustomField 
                            style={styles.productName} 
                            placeholder="product name"
                        />
                        <View style={[styles.row, styles.count]}>
                            <TouchableOpacity>
                                <CustomText style={styles.countText} weight="bold">
                                    -
                                </CustomText>
                            </TouchableOpacity>
                            <TextInput 
                                style={styles.countInput}
                            />
                            <TouchableOpacity>
                                <CustomText style={styles.countText} weight="bold">
                                    +
                                </CustomText>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[styles.row, styles.marginBottom]}>
                        <TouchableOpacity style={styles.options}>
                            <CustomText style={styles.optionsLabel}>pkg</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.options}>
                            <CustomText style={styles.optionsLabel}>kg</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.options}>
                            <CustomText style={styles.optionsLabel}>litre</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.options}>
                            <CustomText style={styles.optionsLabel}>bott</CustomText>
                        </TouchableOpacity>
                    </View>
                    <CustonButton 
                        title="Add to list"
                        style={styles.btn} 
                    />  
                </View> 
                <View style={styles.border}/>
            </View>
            
            <ProductsCard/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    form: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'white',
        borderTopStartRadius: 20, 
        borderTopEndRadius: 20,
        marginTop: -24,
        marginBottom: -60,
    },
    horizontal: {
        marginHorizontal: 16,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    marginTop: {
        marginTop: 15,
    },
    marginBottom: {
        marginBottom: 15,
    },
    count: {
        backgroundColor: COLORS.grey,
        borderRadius: 45,
        alignItems: "center",
        height: 40,
        paddingHorizontal: 10,
    },
    productName: {
        width: "100%",
        paddingHorizontal: "22%",
    }, 
    countInput: {
        paddingHorizontal: "3%",
        textAlign: 'center',
    },
    countText: {
        paddingHorizontal: 7,
        fontSize: 18,
    },
    name: {
        fontSize: 12,
        marginLeft: 82,
    },
    text: {
        marginRight: 35,
    },
    options: {
        backgroundColor: COLORS.grey,
        paddingVertical: 15,
        width: 80,
        borderRadius: 45,
    },
    optionsLabel: {
        fontSize: 12,
        textAlign: 'center',
    },
    button: {
        backgroundColor: COLORS.grey,
        width: "23%",
        color: "red",
    },
    btn : {
        width: "100%",
        backgroundColor: COLORS.main,
    },
    border: {
        paddingBottom: 21,
        borderBottomWidth: 10,
        borderBottomColor: "#E5E5E5",
        borderBottomWidth: 2,
    }
});