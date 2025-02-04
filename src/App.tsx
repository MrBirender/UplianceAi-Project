import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

// Polyfill for global in the browser
if (typeof global === "undefined") {
  (window as any).global = window;
}

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