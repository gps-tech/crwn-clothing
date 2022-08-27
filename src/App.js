import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};
function App() {
  return (
    // within the Routes component, we define the individual routes using the Route component
    <Routes>
      {/* path reflects the path in the URL, element is which element needs to be rendered when the URL matches this path. You pass on a component as you would props to a child component*/}
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
