import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let cities = ["Los Angeles", "San Franscisco", "London", "Paris", "Tokyo"];

  const handleSelectItem = (city: string) => {
    console.log(city);
  };

  return (
    <>
      <div>
        <ListGroup
          cities={cities}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <p>=============================</p>

      <div>
        <Alert children="My Alert" />
      </div>
      <p>=============================</p>

      <div>
        <Button />
      </div>
    </>
  );
}

export default App;
