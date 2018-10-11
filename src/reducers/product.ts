import { ActionType, IAction, IProduct } from "../model";
import createReducer from "./createReducer";

export const productList = createReducer([], {
  [ActionType.ADD_PRODUCT](state: IProduct[], action: IAction<IProduct>) {
    return [...state, action.payload];
  }
});
