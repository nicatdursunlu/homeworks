import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { CustomText, CustonButton, SingleListCard } from '../components';
import { Header } from '../commons';


import { getShopList } from '../redux/data';
import { connect } from 'react-redux';
import COLORS from '../styles/colors';
import images from '../styles/images';
import { useNavigation } from '@react-navigation/native';

const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
});



export const SingleStaticEditScreen = connect(mapStateToProps)((props) => {

    const {  route } = props;
    
    const products = route.params.products;
    const title = route.params.title;

    const navigation = useNavigation();

    return(
        <ScrollView style={styles.container}>
            {/* <Header 
                title="Edit Screen" 
                menu={false}
                edit={true}
            /> */}

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.iconsWrapper}
                    //onPress={navigation.navigate("One Time List")}
                >
                    <Image style={styles.arrowBackIcon} source={images.arrowBack} />
                </TouchableOpacity>
                <CustomText weight="medium" style={styles.title} numberOfLines={1}>{title}</CustomText>
                <TouchableOpacity
                        style={styles.iconsWrapper}
                        onPress={navigation.navigate("Add To List")}
                    >
                    <Image style={styles.editIcon} source={images.edit} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                <TouchableOpacity style={styles.resetBtn}>
                    <CustomText weight="bold" style={styles.resetBtnTitle}>
                        Reset
                    </CustomText>
                </TouchableOpacity>
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <SingleListCard
                            name={item.name}
                            count={item.count}
                            unit={item.unit}
                        />
                    )}
                />
            </View>
        </ScrollView>
       
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: "row",
        paddingTop: 22,
        backgroundColor: COLORS.main,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        color: "white",
        paddingTop: 10,
        paddingBottom: 50,
        textAlign: 'center',
    },
    iconsWrapper: {
        paddingVertical: 12,
        paddingTop: 10,
        marginTop: 5,
    },
    arrowBackIcon: {
        height: 18,
        width: 23,
        marginLeft: 20,
    },
    editIcon: {
        marginRight: 20,
    },



    body: {
        flex: 1,
        paddingTop: 10,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "white",
        marginTop: -24,
        paddingHorizontal: 16,
    },
    resetBtn: {
        backgroundColor: COLORS.main,
        borderRadius: 50,
        marginTop: 10,
        width: 100,
        marginBottom: 15,
    },
    resetBtnTitle: {
        color: "white",
        fontSize: 10,
        paddingHorizontal: 30,
        paddingVertical: 5,
        textTransform: 'uppercase',
    },
    productsList: {
        borderWidth: 2,
        marginBottom: 10,
        borderColor: COLORS.secondary,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingVertical: 7,
    },
    name: {
        paddingLeft: 17,
        fontSize: 14,
    },
    count: {
        fontSize: 14,
        paddingRight: 3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 17,
    }

});