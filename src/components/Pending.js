import React from "react";
import { useSimpleState } from "simple-context-state";

function Pending() {
  //Todos Store
  const { todos, todos_addAsync } = useSimpleState();

  return <div className="pendingComponent">Loading</div>;
}

export default Pending;