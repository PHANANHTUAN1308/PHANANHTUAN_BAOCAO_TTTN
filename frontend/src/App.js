import "./assets/sass/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutSide from "./layouts/Site";
import LayoutAdmin from "./layouts/Admin";
import RouterSite from "./router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutSide />}>
            {RouterSite.RouterPublic.map(function(router,index){
              const Page=router.component;
              return <Route key={index} path={router.path} element ={<Page/>}/>
            })}
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            {RouterSite.RouterPrivate.map(function(router,index){
              const Page=router.component;
              return <Route key={index} path={router.path} element ={<Page/>}/>
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
