import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Register from "./form-submit/Register";
import ApplyValidation from "./form-submit/ApplyValidation";
import IntegratingExistingForm from "./form-submit/IntegratingExistingForm";
import IntegratingUI from "./form-submit/IntegratingUI";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
