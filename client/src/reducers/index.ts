import { combineReducers } from "redux";
import { IProduct } from "../model";
import * as productReducder from "./product";

export interface IRootState {
  productList: IProduct[];
}

export default combineReducers<IRootState>({
  ...productReducder
});
