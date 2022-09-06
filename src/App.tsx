import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/header";
import Home from './pages/home';
import PDP from './pages/pdp';
import './App.scss';

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="/pdp/:id" element={<PDP />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
