import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Register from "./form-submit-get-started/Register";
import ApplyValidation from "./form-submit-get-started/ApplyValidation";
import IntegratingExistingForm from "./form-submit-get-started/IntegratingExistingForm";
import IntegratingUI from "./form-submit-get-started/IntegratingUI";
import HandleErrors from "./form-submit-get-started/HandleErrors";
import SchemaValidation from "./form-submit-get-started/SchemaValidation";
import ListComponent from "./form-submit-get-started/ListComponent";
import FormValidateDemo from "./form-submit-get-started/FormValidateDemo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
