import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
      <footer>footer</footer>
    </main>
  );
};

export default App;

/*  <div>
        <section>counter</section>
        <section>Form</section>
        <section>Text Editor</section>
      </div> */