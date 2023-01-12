import React from "react";
import "./App.css";
import { Component1 } from "./components/component1";
import { GetModule } from "./components/modules/get-module";
import { Header } from "./components/modules/header";
import { PostModule } from "./components/modules/post-module";
import { useIsMobile } from "./hooks/use-is-mobile";

function App() {
  const isMobile = useIsMobile();
  return (
    <div className="App">
      <Header type={isMobile ? "mobile" : "desktop"} />
      <div className="content">
        <Component1 />
        <GetModule />
        <PostModule />
      </div>
    </div>
  );
}

export default App;
