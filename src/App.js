import TemplateWebSite1 from './components/template/1/index.js'
import TemplateWebSite2 from './components/template/2/index.js'
import TemplateWebSite3 from './components/template/3/index.js'
import TemplateWebSite4 from './components/template/4/index.js'
import TemplateWebSite5 from './components/template/5/index.js'
import TemplateWebSite6 from './components/template/6/index.js'
import TemplateWebSite7 from './components/template/7/index.js'
import TemplateWebSite8 from './components/template/8/index.js'
import TemplateWebSite9 from './components/template/9/index.js'

import ListeTemplateWebSite from './components/liste-templates.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<ListeTemplateWebSite />} />
          <Route path="/templates-websites" element={<ListeTemplateWebSite />} />
          <Route path="/template/1" element={<TemplateWebSite1 />} />
          <Route path="/template/2" element={<TemplateWebSite2 />} />
          <Route path="/template/3" element={<TemplateWebSite3 />} />
          <Route path="/template/4" element={<TemplateWebSite4 />} />
          <Route path="/template/5" element={<TemplateWebSite5 />} />
          <Route path="/template/6" element={<TemplateWebSite6 />} />
          <Route path="/template/7" element={<TemplateWebSite7 />} />
          <Route path="/template/8" element={<TemplateWebSite8 />} />
          <Route path="/template/9" element={<TemplateWebSite9 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
