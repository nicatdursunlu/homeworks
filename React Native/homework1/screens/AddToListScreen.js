import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomText, CustomField, CustonButton, ProductsCard } from '../components';
import { Heading } from '../commons';
import COLORS from '../styles/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const AddToListScreen = () => {
    return(
        <View style={styles.container}>

            <Heading 
                heading="Add to list" 
                back={true}
                save={true}
            />

            <View style={styles.form}>
                <View style={styles.horizontal}>
                    <View style={styles.row}>
                        <View style={styles.titleWrapper}>
                            <CustomText weight="medium" style={styles.title}>
                                position name
                            </CustomText> 
                        </View>
                        <View>
                            <CustomText weight="medium" style={styles.title}>
                                count
                            </CustomText> 
                        </View>
                    </View>

                    <View style={[styles.row, styles.marginTop]}>
                        <CustomField 
                            style={styles.field} 
                            placeholder="cubsdybvys"
                        />
                        <View style={[styles.row, styles.count]}>
                            <TouchableOpacity>
                                <CustomText style={styles.countText} weight="bold">
                                    -
                                </CustomText>
                            </TouchableOpacity>
                            <View>
                                <CustomText style={styles.countText} weight="bold">
                                    2
                                </CustomText>
                            </View>
                            <TouchableOpacity>
                                <CustomText style={styles.countText} weight="bold">
                                    +
                                </CustomText>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[styles.row, styles.marginBottom]}>
                        <CustonButton 
                            title="kilo" 
                            style={styles.button} 
                        /> 
                        <CustonButton 
                            title="kilo" 
                            style={styles.button} 
                        /> 
                        <CustonButton 
                            title="kilo" 
                            style={styles.button} 
                        /> 
                        <CustonButton 
                            title="kilo" 
                            style={styles.button} 
                        /> 

                        {/* <TouchableOpacity style={styles.options}>
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
                        </TouchableOpacity> */}
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
    countText: {
        paddingHorizontal: 7,
        fontSize: 18,
    },
    titleWrapper: {
        alignItems: 'center',
    },
    title: {
        fontSize: 12,
    },
    field: {
        width: 270,
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
        //width: "48%",
        backgroundColor: COLORS.main,
    },
    border: {
        paddingBottom: 30,
        borderBottomWidth: 10,
        borderBottomColor: "#E5E5E5",
        borderBottomWidth: 2,
    }
});