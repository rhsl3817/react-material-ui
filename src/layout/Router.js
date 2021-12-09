import { Route } from "react-router-dom";
import Home from "../Home";
import BoxComponent from "../component/layout/Box";
import ContainerComponent from "../component/layout/Container";
import ButtonComponent from "../component/layout/Button"
import GridComponent from "../component/layout/Grid"
import ButtopGroupComponent from "../component/layout/ButtonGroup"
import CheckboxComponent from "../component/layout/Checkbox"

const Router = () => {
  return (
    <>
      <Route path="/" exact={true} component={Home} />
      <Route path="/box" component={BoxComponent} />
      <Route path="/container" component={ContainerComponent} />
      <Route path="/button" component={ButtonComponent} />
      <Route path="/grid" component={GridComponent} />
      <Route path="/buttongroup" component={ButtopGroupComponent} />
      <Route path="/checkbox" component={CheckboxComponent} />
    </>
  );
};

export default Router;