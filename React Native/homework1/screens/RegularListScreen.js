import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Heading, ListLayout } from '../commons';
import { ShopListCard } from '../components';
import { getShopList } from '../redux/data';
import { connect } from 'react-redux';
import COLORS from '../styles/colors';

const mapStateToProps = (state) => ({
    shopLists: getShopList(state),
});

export const RegularListScreen = connect(mapStateToProps)((props) => {



    return(
        <ListLayout>

        </ListLayout>
    );
});

const styles = StyleSheet.create({
    

});