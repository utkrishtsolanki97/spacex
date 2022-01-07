import React, { useState } from "react";
import HomePage from "./Pages/HomePage";

const App = () => {
  const [spacexData, setSpacexData] = useState([]);

  React.useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches?limit=100")
      .then((response) => response.json())
      .then((data) => setSpacexData(data));
  }, []);

  return (
    <div>
      <HomePage launches={spacexData} />
    </div>
  );
};

export default App;
