import * as React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import HomePages from "./pages/HomePages";
import rootReducer, { IRootState } from "./reducers";

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV === "development") {
  middleware = composeWithDevTools(middleware);
}

const store = createStore(rootReducer, {}, middleware) as Store<IRootState>;

class Root extends React.Component {
  public state = {
    mobileOpen: true
  };

  public render() {
    return (
      <Provider store={store}>
        <HomePages />
      </Provider>
    );
  }
}

export default Root;
