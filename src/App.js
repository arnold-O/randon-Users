import logo from "./logo.svg";
import "./App.css";
import List from "./component/List";
import { useEffect, useState } from "react";
import Loading from "./component/Loading";

const url = "https://randomuser.me/api/";

function App() {
  const [loading, setLoading] = useState(true);
  const [dataset, setDataset] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const dataValues = await response.json();
      setLoading(false);
      setDataset(dataValues.results);
      console.log(dataValues.results)
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>List of Users</h1>
     <List dataset={dataset}  fetchData={ fetchData}/> 
    </div>
  );
}

export default App;
