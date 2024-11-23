import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Chicago", "London", "Tokyo", "Cairo", "Sao Paulo", "Sydney"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      />
      <hr />
      <hr />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <Button
        text="Button"
        color="warning"
        onClick={() => setAlertVisibility(true)}
      ></Button>
    </>
  );
}

export default App;
