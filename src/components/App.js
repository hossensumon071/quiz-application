import "../styles/App.css";
import Layout from "./Layout"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Layout>
        <Home/>
        {/* <Signup/> */}
        {/* <Login/> */}
      </Layout>
    </div>
  );
}

export default App;
