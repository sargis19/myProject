import { useSelector } from "react-redux";
import Aside from "./components/Aside";
import Photos from "./components/Photos";

function App() {
  const { componentStatus } = useSelector((state) => state.status);
  function renderComponent() {
    switch (componentStatus) {
      case "photos":
        return <Photos />;
      default:
        <div>No Status</div>;
    }
  }
  return (
    <div className="App">
      <Aside />
      <div className="main-content-wrapper">{renderComponent()}</div>
      <button className="add-button">ADD</button>
    </div>
  );
}

export default App;
