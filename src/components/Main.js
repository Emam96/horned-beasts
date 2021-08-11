import React from "react";
import HornedBeast from "./HornedBeasts";
import "./Main.css";
import dataForMap from "./dataForMap.json";
import Filter from "./Filter";


class Main extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      dataForMap2: dataForMap,
    };
  }
  filterBeasts = (event) => {
    
    event.preventDefault();    
    
    let newArr = [];

    let newData = Number(event.target.value);
    if (!(isNaN(newData))) {
      newArr = dataForMap.filter((item) => {
        if (item.horns === newData) {
          return 1;
        } 
      });

     

    }  else  {
      newArr = dataForMap;
    }
    this.setState({
      dataForMap2: newArr,
    });
  };



  render() {
    return (
      <>
          <Filter filterBeasts={this.filterBeasts}/>
          <hr></hr>
          <div id="con">
        {this.state.dataForMap2.map((item, i) => {
          return (
            <HornedBeast
              key={i}
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
              showModal={this.props.showModal}
              // horns={this.props.horns}
            />
          );
        })}
        </div>

      </>
    );
  }
}

export default Main;
