// ACTION TYPES
const ADD_LIST = "ADD_LIST";
const ADD_PRODUCT = "ADD_PRODUCT";


// SELECTORS
const MODULE_NAME = "data";
export const getShopList = (state) => state[MODULE_NAME].shopLists;

// REDUCER

const initialState = {
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
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    unit: "pkg", 
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    unit: "pkg", 
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "pkg",
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
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    unit: "pkg", 
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    unit: "pkg",
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "pkg",
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
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    unit: "pkg",
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    unit: "pkg",
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    unit: "pkg", 
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
                    ...state.shopLists,
                    {
                        id: createID(),
                        title: payload.title,
                        type: payload.type,
                        products: [],
                    },
                ],
            };
        case ADD_PRODUCT:
            return {
                ...state,
                shopLists: state.shopLists.map((shopList) => {
                    if(shopList.id === payload.shopListID) {
                        return {
                            ...shopList,
                            products: [
                                ...shopList.products,
                                {
                                    id: createID(),
                                    name: payload.name,
                                    count: payload.count,
                                },
                            ],
                        };
                    }
                })
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

function createID() {
    return `${Date.now()}${Math.random()}`;
};

