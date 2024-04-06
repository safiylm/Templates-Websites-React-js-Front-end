import TravelTemplate1 from './components/template/Travel/1/index.js'
import TravelTemplate2 from './components/template/Travel/2/index.js'
import ArtDesignTemplate1 from './components/template/Art-Design/1/index.js'
import ArtDesignTemplate2 from './components/template/Art-Design/2/index.js'
import InteriorDesignTemplate1 from './components/template/Interior-Design/1/index.js'
import EducationTemplate1 from './components/template/Education/1/index.js'
import EducationTemplate2 from './components/template/Education/2/index.js'
import EducationTemplate3 from './components/template/Education/3/index.js'
import FoodRestaurantNutritionTemplate1 from './components/template/Food-Restaurant-Nutrition/1/index.js'
import FoodRestaurantNutritionTemplate2 from './components/template/Food-Restaurant-Nutrition/2/index.js'
import FoodRestaurantNutritionTemplate3 from './components/template/Food-Restaurant-Nutrition/3/index.js'
import FoodRestaurantNutritionTemplate4 from './components/template/Food-Restaurant-Nutrition/4/index.js'
import FoodRestaurantNutritionTemplate5 from './components/template/Food-Restaurant-Nutrition/5/index.js'
import PortfolioTemplate1 from './components/template/Portfolio/1/index.js';
import ListeTemplateWebSite from './components/liste-templates.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<ListeTemplateWebSite />} />
          <Route path="/" element={<ListeTemplateWebSite />} />
          <Route path="/template/1" element={<FoodRestaurantNutritionTemplate4 />} />
          <Route path="/template/2" element={<TravelTemplate2 />} />
          <Route path="/template/3" element={<InteriorDesignTemplate1 />} />
          <Route path="/template/4" element={<EducationTemplate2 />} />
          <Route path="/template/5" element={<ArtDesignTemplate1 />} />
          <Route path="/template/6" element={<FoodRestaurantNutritionTemplate2 />} />
          <Route path="/template/7" element={<FoodRestaurantNutritionTemplate3 />} />
          <Route path="/template/8" element={<TravelTemplate1 />} />
          <Route path="/template/9" element={<FoodRestaurantNutritionTemplate5 />} />
          <Route path="/template/10" element={<EducationTemplate3 />} />
          <Route path="/template/11" element={<ArtDesignTemplate2 />} />
          <Route path="/template/12" element={<EducationTemplate1 />} />
          <Route path="/template/13" element={<FoodRestaurantNutritionTemplate1 />} />
          <Route path="/template/14" element={< PortfolioTemplate1 />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
