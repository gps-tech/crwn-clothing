import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

function App() {
  return (
    // within the Routes component, we define the individual routes using the Route component
    <Routes>
      {/* path reflects the path in the URL, element is which element needs to be rendered when the URL matches this path. You pass on a component as you would props to a child component*/}
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
