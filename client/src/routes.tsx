import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/index";
import { ProductsPage } from "./pages";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={ProductsPage} />
      </Switch>
    </Layout>
  );
};

export default Routes;
