/* eslint-disable array-callback-return */
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast  from "./components/SelectedBeast";
import dataForMap from "./components/dataForMap.json";





class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beastList:  {}
    };
  }

  showModal = (title) => {
    let beasts = dataForMap.find((beast) => {
      if (beast.title === title) {
        return beast;
      }
    });
    this.setState({
      beastList: beasts,
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      beastList: {},
      show: false,
    });
  };



  render() {
    return (

<>
      <Header/>
      <Main showModal={this.showModal} />
      <SelectedBeast show={this.state.show} handleClose={this.handleClose} beastList={this.state.beastList} />
      <Footer/>
</>





    );

  }
}

export default App;




