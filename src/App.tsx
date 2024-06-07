import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/Button";

function app() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <button onClick={() => setAlertVisibility(true)}>My Button</button>
    </div>
  );
}
export default app;
