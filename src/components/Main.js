import React from "react";
import HornedBeast from "./HornedBeasts";
import "./Main.css";
let dataForMap = require ("./dataForMap.json");







class Main extends React.Component {

  
  render() {
    return (
      <>
        {dataForMap.map( (item, i) => {
          return (
            
            <HornedBeast
             key = {i}
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
            />
          );
        })}
      </>
    );
  }
}



export default Main;