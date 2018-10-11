import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer, { IRootState } from "./reducers";
import Routes from "./Routes";

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
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
