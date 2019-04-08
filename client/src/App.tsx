import React, { lazy, Suspense, FunctionComponent } from "react";
const Login = lazy(() => import("./components/auth/Login"));
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecondaryLoading from "./components/common/SecondaryLoading";

const App: FunctionComponent<{}> = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <>
            <SecondaryLoading />
          </>
        }
      >
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
};

// class App extends Component<Props, State> {
//   state: State = {
//     name: ""
//   };

//   onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     this.setState({ name: newValue });
//   };

//   render() {
//     // return <InputGroup onChange={this.onChange} />;
//     return <Login />;
//   }
// }

export default App;
