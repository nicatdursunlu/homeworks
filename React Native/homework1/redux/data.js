// ACTION TYPES
const ADD_LIST = "ADD_LIST";


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
                    //measure: pkg  

                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    //measure: pkg 
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    //measure: kg 
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    //measure: kg 
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
                    //measure: pkg 
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    //measure: pkg 
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    //measure: kg 
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    //measure: kg 
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
                    //measure: pkg 
                },
                { 
                    id: createID(), 
                    name: "Salt", 
                    count: 1, 
                    //measure: pkg 
                },
                { 
                    id: createID(), 
                    name: "Tomatoes", 
                    count: 1, 
                    //measure: kg 
                },
                { 
                    id: createID(), 
                    name: "Cheese", 
                    count: 0.3, 
                    //measure: kg 
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
                        name: payload,
                        type: "regular",
                        products: [],
                    },
                ],
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

