import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/cart';

export const Header = () => {

    const { cartProducts } = useContext(CartContext);

    return(
        <Container>
            <StyledNavLink to="/products">Products</StyledNavLink>
            <StyledNavLink to="/cart">Cart</StyledNavLink>
            {!!cartProducts.length && cartProducts.length}
        </Container>
    )
}

const Container = styled.header`
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
`

const StyledNavLink = styled(NavLink)`
    width: 48%;
    border: 1px solid lightgrey;
    padding: 10px;
    border-radius: 10px;
    color: grey;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
    transition: all .3s ease;

    &.active {
        border-color: black;
        color: black;
    }
`
