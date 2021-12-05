import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Switch, Route } from "react-router";
import Register from "./form-submit-get-started/Register";
import ApplyValidation from "./form-submit-get-started/ApplyValidation";
import IntegratingExistingForm from "./form-submit-get-started/IntegratingExistingForm";
import IntegratingUI from "./form-submit-get-started/IntegratingUI";
import HandleErrors from "./form-submit-get-started/HandleErrors";
import SchemaValidation from "./form-submit-get-started/SchemaValidation";
import ListComponent from "./form-submit-get-started/ListComponent";
import FormValidateDemo from "./form-submit-get-started/FormValidateDemo";
import UseForm_criteriaMode from "./form-API/UseForm_criteriaMode";
import { Button } from "@material-ui/core";
import UserForm_Register from "./form-API/UserForm_Register";
import RegisterForm_MaterialUI from './form-API/RegisterForm_MaterialUI';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Button component={Link} to={"/"} color="primary" variant="contained">
          Home
        </Button>
        <Switch>
          <Route path="/" exact component={ListComponent} />
          <Route path="/register" exact component={Register} />
          <Route path="/apply-validation" exact component={ApplyValidation} />
          <Route
            path="/existing-form"
            exact
            component={IntegratingExistingForm}
          />
          <Route path="/UI-libraries" exact component={IntegratingUI} />
          <Route path="/handle-errors" exact component={HandleErrors} />
          <Route path="/schema-validate" exact component={SchemaValidation} />
          <Route
            path="/form-validate-demo"
            exact
            component={FormValidateDemo}
          />
          <Route
            path="/form-criteriaMode"
            exact
            component={UseForm_criteriaMode}
          />
          <Route
            path="/form-criteriaMode"
            exact
            component={UseForm_criteriaMode}
          />
          <Route
            path="/form-register"
            exact
            component={UserForm_Register}
          />
          <Route
            path="/form-register-materialUI"
            exact
            component={RegisterForm_MaterialUI}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
