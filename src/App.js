import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Register from "./form-submit/Register";
import ApplyValidation from "./form-submit/ApplyValidation";
import IntegratingExistingForm from "./form-submit/IntegratingExistingForm";
import IntegratingUI from "./form-submit/IntegratingUI";
import HandleErrors from "./form-submit/HandleErrors";
import SchemaValidation from "./form-submit/SchemaValidation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Register} />
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
