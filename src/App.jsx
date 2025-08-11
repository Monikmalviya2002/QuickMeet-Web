import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // ✅ Import Provider
import Landingpage from './component/Landingpage';
import Login from './component/Login';
import Register from './component/Register';
import Meet from './component/Meet';
import appStore from './utills/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/meet" element={<Meet />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
