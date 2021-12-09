import { Route } from "react-router-dom";
import Home from "../Home";
import BoxComponent from "../component/layout/Box";
import ContainerComponent from "../component/layout/Container";
import ButtonComponent from "../component/layout/Button"

const Router = () => {
  return (
    <>
      <Route path="/" exact={true} component={Home} />
      <Route path="/box" component={BoxComponent} />
      <Route path="/container" component={ContainerComponent} />
      <Route path="/button" component={ButtonComponent} />
    </>
  );
};

export default Router;