import React from 'react';
import HornedBeast from './HornedBeasts'
import './Main.css';

class Main extends React.Component {
  render() {
    return (


        <>
        <HornedBeast title='Horned 1' imageUrl='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' description='horned Beast #1' />
        <HornedBeast title='Horned 2' imageUrl='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' description='horned Beast  #2' />
        <HornedBeast title='Horned 3' imageUrl='https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg' description='horned Beast #3' />
        
    </>



    );

  }
}

export default Main;