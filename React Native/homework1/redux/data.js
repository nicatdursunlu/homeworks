// ACTION TYPES
const ADD_LIST = "ADD_LIST";
const DELETE_LIST = "DELETE_LIST";
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const CHANGE_BUY_STATUS = "CHANGE_BUY_STATUS";
const RESET_PRODUCT = "RESET_PRODUCT";
const CHANGE_USER = "CHANGE_USER";


// SELECTORS
const MODULE_NAME = "data";
export const getData = (state) => state[MODULE_NAME];
export const getShopList = (state) => state[MODULE_NAME].shopLists;
export const getUser = (state) => state[MODULE_NAME].user;


// REDUCER

const initialState = {
    user: {
        username: "nidjat_dursunlu",
        imgUrl: "",
    },
    shopLists: [
        {
            id: createID(),
            title: "Everything for breakfast",
            type: "regular",
            products : [
                { 
                    id: createID(), 
                    name: "Pasta", 
                    count: 2, 
                    unit: "pkg",
                    bought: false,
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    unit: "pkg", 
                    bought: false,
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    unit: "kg",
                    bought: false, 
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: false,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: true,
                },
            ]
        },
        {
            id: createID(),
            title: "Everything for breakfast",
            type: "oneTime",
            products : [
                { 
                    id: createID(), 
                    name: "Pasta", 
                    count: 2, 
                    unit: "pkg",
                    bought: false,
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    unit: "pkg", 
                    bought: false,
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    unit: "kg",
                    bought: false, 
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: false,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: true,
                },
            ]
        },
        {
            id: createID(),
            title: "Evening with Pizza",
            type: "regular",
            products : [
                { 
                    id: createID(), 
                    name: "Pasta", 
                    count: 2, 
                    unit: "pkg", 
                    bought: false,
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    unit: "pkg", 
                    bought: false,
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    unit: "kg",
                    bought: false,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: false,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: false,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: false,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg",
                    bought: false,
                },
            ]
        },
        {
            id: createID(),
            title: "Kitchen repair",
            type: "oneTime",
            products : [
                { 
                    id: createID(), 
                    name: "Pasta", 
                    count: 2, 
                    unit: "pkg", 
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    unit: "pkg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg", 
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Pasta", 
                    count: 2, 
                    unit: "pkg", 
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    unit: "pkg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg", 
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Pasta", 
                    count: 2, 
                    unit: "pkg", 
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    unit: "pkg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg", 
                    bought: true,
                },
            ]
        },
        {
            id: createID(),
            title: "Kitchen repair",
            type: "regular",
            products : [
                { 
                    id: createID(), 
                    name: "Pasta", 
                    count: 2, 
                    unit: "pkg", 
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    unit: "pkg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg", 
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Pasta", 
                    count: 2, 
                    unit: "pkg", 
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    unit: "pkg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg", 
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Pasta", 
                    count: 2, 
                    unit: "pkg", 
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    unit: "pkg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    unit: "kg",
                    bought: true,
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "kg", 
                    bought: true,
                },
            ]
        }
    ]
}; 

export function dataReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_LIST:
            return {   
                ...state,
                shopLists: [
                    {
                        id: createID(),
                        title: payload.title,
                        type: payload.type,
                        products: [],
                    },
                    ...state.shopLists,
                ],
            };
        case DELETE_LIST :
            return {
                ...state,
                shopLists: state.shopLists.filter(
                    (shopList) => shopList.id !== payload.shopListID
                ),
            };

        case ADD_PRODUCT:
            return {
                ...state,
                shopLists: state.shopLists.map((shopList) => {
                    if(shopList.id === payload.shopListID) {
                        return {
                            ...shopList,
                            products: [
                                {
                                    id: createID(),
                                    name: payload.name,
                                    count: payload.count,
                                    unit: payload.unit,
                                    bought: false,
                                },
                                ...shopList.products,
                            ],
                            
                        };
                    }
                    return shopList;
                }),
            };
        case DELETE_PRODUCT: 
            return {
                ...state,
                shopLists: state.shopLists.map((shopList) => {
                    if(shopList.id === payload.shopListID) {
                        return {
                            ...shopList,
                            products: shopList.products.filter(
                                (product) => product.id !== payload.productID
                            ),
                        };
                    }
                    return shopList;
                }),
            };
        case UPDATE_PRODUCT :
            return {
                ...state,
                shopLists: state.shopLists.map((shopList) => {
                    if(shopList.id === payload.shopListID) {
                        return {
                            ...shopList,
                            products: shopList.products.map((product) => {
                                if(product.id === payload.productID) {
                                    return {
                                        ...product,
                                        name: payload.name,
                                        count: payload.count,
                                        unit: payload.unit,
                                    };
                                }
                                return product;
                            }),
                        };
                    }
                    return shopList;
                }),
            };

        case CHANGE_BUY_STATUS:
            return {
                ...state,
                shopLists: state.shopLists.map((shopList) => {
                    if(shopList.id === payload.shopListID) {
                        return {
                            ...shopList,
                            products: shopList.products.map((product) => {
                                if(product.id === payload.productID) {
                                    return {
                                        ...product,
                                        bought: !product.bought,
                                    };
                                }
                                return product;
                            }),
                        };
                    }
                    return shopList;
                }),
            };
        case RESET_PRODUCT:
            return {
                ...state,
                shopLists: state.shopLists.map((shopList) => {
                    if(shopList.id === payload.shopListID) {
                        return {
                            ...shopList,
                            products: shopList.products.map((product) => {
                                return {
                                    ...product,
                                    bought: false,
                                };
                            }),
                        };
                    }
                    return shopList;
                }),
            };


        case CHANGE_USER:
            return{
                ...state,
                user: {
                    ...state.user,
                    username: payload.username,
                    imageUrl: payload.imageUrl,
                },
            };
    
        default:
            return state;
    }
};

// ACTION CREATORS

export const addList = (payload) => ({
    type: ADD_LIST,
    payload,
});

export const deleteList = (payload) => ({
    type: DELETE_LIST,
    payload,
});

export const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload,
});

export const deleteProduct = (payload) => ({
    type: DELETE_PRODUCT,
    payload,
});

export const updateProduct = (payload) => ({
    type: UPDATE_PRODUCT,
    payload,
});

export const changeBuyStatus = (payload) => ({
    type: CHANGE_BUY_STATUS,
    payload,
});

export const resetProduct = (payload) => ({
    type: RESET_PRODUCT,
    payload,
});

export const changeUser = (payload) => ({
    type: CHANGE_USER,
    payload,
});

function createID() {
    return `${Date.now()}${Math.random()}`;
};

