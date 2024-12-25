import React, {useState} from "react";
import './style.css';
import data from "./templateData.json";
function App() {

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="container">
        <div className="searchInput-container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="container">
          {
            data 
              .filter((val) => {
                if(searchTerm === ""){
                  return true;
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return true;
                }
                
                return false;
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <h3>{val.name}</h3>
                      <h4>{val.brand}</h4>
                      <p>{val.description}</p>
                      <p className="price">{val.price}</p>
                  </div> 
                )
              })
          }
        </div>
      </div>
      <p>No Result found</p>
    </>
  )
}


export default App;
