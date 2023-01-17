import React from "react";
import "./App.css";
import { Intro } from "./components/modules/intro";
import { GetModule } from "./components/modules/get-module";
import { Header } from "./components/modules/header";
import { PostModule } from "./components/modules/post-module";
import { UserContextProvider } from "./contexts/user-context";
import { useIsMobile } from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  return (
    <div className="App">
      <Header type={isMobile ? "mobile" : "desktop"} />
      <div className="content">
        <Intro />
        <UserContextProvider>
          <GetModule />
          <PostModule />
        </UserContextProvider>
      </div>
    </div>
  );
}

export default App;
