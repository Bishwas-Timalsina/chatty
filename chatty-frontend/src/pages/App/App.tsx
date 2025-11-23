import React from "react";
import ConnectionStatus from "../../components/Atomic/ConnectionStatus";
import UserDetail from "./Component/UserDetail";

const App = () => {
  return (
    <div>
      App
      <div>
        <UserDetail />
        <ConnectionStatus />
      </div>
    </div>
  );
};

export default App;
