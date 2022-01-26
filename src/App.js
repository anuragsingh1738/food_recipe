import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, PageTitle, Search } from './components/common';
import { Breakfast, Home, Review, Dessert, Main, About, Cake } from './components/page';
import FoodData from "./components/page/dessert/Dessert.json"



import './App.css';


function App() {
    return (
    <div className="App"> 
      <Header />
          <Switch>
            <Route path="/review">
              <PageTitle title="review"/>
                <Review />                          
            </Route>
            <Route path="/dessert">
              <PageTitle title="dessert"/>
              <Search placeholder="Enter Food Name..." data={FoodData}/>
              <Dessert />
              </Route>
              <Route path="/cake">
              <PageTitle title="cake"/>
              
              <Cake />

            </Route>
            <Route path="/maincourse">
              <PageTitle title="Main Course"/>
              <Main/>
            </Route>
            <Route path="/breakfast">
              <PageTitle title="breakfast"/>
              
              
              <Breakfast />            
            </Route>
            <Route path="/about">
              <PageTitle title="about us"/>
              <About/>   
            </Route>
            <Route path="/home">
              <PageTitle title="home"/>
              <Home />
            </Route>
          </Switch>
         
      <Footer />
    </div>
  );
}

export default App;