import React from 'react';
import Banner from './Home/Banner/Banner';
import Category from './Home/Category/Category';
import PopularManu from './Home/PopularManu/PopularManu';
import Feature from './Home/Feature/Feature';
import Testomunilus from './Home/Testomonuls/Testomunilus';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
          <PopularManu/>
          <Feature/>
          <Testomunilus/>
        </div>
    );
};

export default Home;