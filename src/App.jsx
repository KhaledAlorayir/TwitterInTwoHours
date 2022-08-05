import React from "react";
import { Route } from "wouter";

//components
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Error from "./components/Error";
import UserPosts from "./pages/UserPosts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Error />
      <Route path="/" component={Home} />
      <Route path="/me" component={Me} />
      <Route path="/user/:id" component={UserPosts} />
    </div>
  );
}

export default App;
