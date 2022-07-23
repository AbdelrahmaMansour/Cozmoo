import * as types from "./actionTypes";

const initialState = {
    basket: [],
    favourite: [],
    user: null,
    loading: false,
    error: null,
  };

  const basketReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

      case types.REMOVE_FROM_BASKET:
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };

      case types.ADD_TO_FAVOURITE:
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };

      case types.REMOVE_FROM_FAVOURITE:
      let newFavourite = [...state.favourite];
      const indexx = state.favourite.findIndex(
        (item) => item.id === action.payload
      );
      if (indexx >= 0) {
        newFavourite.splice(indexx, 1);
      }
      return { ...state, favourite: newFavourite };

      case types.LOGIN_START:
        return {
          ...state,
          loading: true,
        };
      case types.LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
        };
      case types.LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null,
      };
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
        case types.REGISTER_START:
            return {
              ...state,
              loading: true,
            };
        case types.REGISTER_SUCCESS:
            return {
              ...state,
              loading: false,
              user: action.payload,
            };
        case types.REGISTER_FAIL:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };

        case types.SET_USER:
              return {
                ...state,
                user: action.payload,
              };

        case types.SET_BASKET_EMPTY:
          return {
            ...state,
            basket: [],
          };

          case types.SET_FAVOURITE_EMPTY:
          return {
            ...state,
            favourite: [],
          };
        default:
            return state;
    }
};
export default basketReducer;      