
// // ACTION TYPES
// const SET_USER_INFO = "SET_USER_INFO";

// // SELECTORS
// export const MODULE_NAME = 'settings';
// export const selectUserInfo = (state) => state[MODULE_NAME].userInfo;

// // REDUCERS
// const initialState = {
//   userInfo: {
//       username: "Nijat",
//       userAvatarUrl: "",
//   },
// };

// export function reducer(state = initialState, { type, payload }) {
//   switch (type) {
//     case SET_USER_INFO:
//       return {
//         ...state,
//         userInfo: {
//           username: payload?.username,
//           userAvatarUrl: payload?.userAvatarUrl,
//         },
//       };
//     default:
//       return state;
//   }
// };

// // ACTION CREATORS

// export const setUserInfo = (payload) => ({
//   type: SET_USER_INFO,
//   payload,
// });

