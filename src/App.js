import TravelBlog1 from './components/template/Blog/Travel/1/index.js'
import TravelBlog2 from './components/template/Blog/Travel/2/index.js'

import EducationTemplate1 from './components/template/Education/1/index.js'
import EducationTemplate2 from './components/template/Education/2/index.js'
import EducationTemplate3 from './components/template/Education/3/index.js'
import EducationTemplate4 from './components/template/Education/4/index.js'
import EducationTemplate5 from './components/template/Education/5/index.js'
import EducationTemplate6 from './components/template/Education/6/index.js'
import FoodRestaurantNutritionTemplate1 from './components/template/Food-Restaurant-Nutrition/1/index.js'
import FoodRestaurantNutritionTemplate2 from './components/template/Food-Restaurant-Nutrition/2/index.js'
import FoodRestaurantNutritionTemplate3 from './components/template/Food-Restaurant-Nutrition/3/index.js'
import FoodRestaurantNutritionTemplate4 from './components/template/Food-Restaurant-Nutrition/4/index.js'
import FoodRestaurantNutritionTemplate5 from './components/template/Food-Restaurant-Nutrition/5/index.js'
import PortfolioTemplate1 from './components/template/Portfolio/1/index.js';
import EcommerceTemplate1 from './components/template/Ecommerce/1/index.js';
import AuthentificationTemplate1 from './components/template/Authentification/1/index.js';
import CoiffeurTemplate1 from './components/template/Agence/Coiffeur/1/index.js';
import Home from './components/home.js'
import MyAccountTemplate1 from './components/template/myAccount/1/index.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuRestaurantTemplate from './components/template/Agence/Restaurant/1/index.js'
import BurgerRestaurantTemplate from './components/template/Agence/Restaurant/2/index.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/template/8" element={<FoodRestaurantNutritionTemplate4 />} />
          <Route path="/template/2" element={<TravelBlog2 />} />
          <Route path="/template/3" element={<Home />} />
          <Route path="/template/4" element={<EducationTemplate2 />} />
          <Route path="/template/5" element={<Home />} />
          <Route path="/template/6" element={<FoodRestaurantNutritionTemplate2 />} />
          <Route path="/template/7" element={<FoodRestaurantNutritionTemplate3 />} />
          <Route path="/template/1" element={<TravelBlog1 />} />
          <Route path="/template/9" element={<FoodRestaurantNutritionTemplate5 />} />
          <Route path="/template/10" element={<EducationTemplate3 />} />
          <Route path="/template/11" element={<Home />} />
          <Route path="/template/12" element={<EducationTemplate1 />} />
          <Route path="/template/13" element={<FoodRestaurantNutritionTemplate1 />} />
          <Route path="/template/14" element={< PortfolioTemplate1 />} />
          <Route path="/template/15" element={< AuthentificationTemplate1  />} />          
          <Route path="/template/16" element={< EcommerceTemplate1 />} />
          <Route path="/template/17" element={< MyAccountTemplate1  />} />
          <Route path="/template/18" element={< EducationTemplate4  />} />
          <Route path="/template/19" element={< EducationTemplate5  />} />
          <Route path="/template/20" element={< EducationTemplate6  />} />
          <Route path="/template/21" element={< CoiffeurTemplate1  />} />
          <Route path="/template/22" element={< BurgerRestaurantTemplate  />} />
          <Route path="/template/23" element={< MenuRestaurantTemplate  />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
