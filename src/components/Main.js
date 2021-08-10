import React from "react";
import HornedBeast from "./HornedBeasts";
import "./Main.css";
import dataForMap from "./dataForMap.json";







class Main extends React.Component {

 
  
  


//   showModal = () =>{
//     this.setState({
//       show: true
//     })
// }



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
              showModal={this.props.showModal}
            />
          );
        })}
      </>
    );
  }
}



export default Main;