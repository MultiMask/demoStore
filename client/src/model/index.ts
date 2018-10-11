export interface IProduct {
  id: number;
}

export enum ActionType {
  ADD_PRODUCT
}

export interface IAction<T> {
  type: ActionType;
  payload: T;
}
