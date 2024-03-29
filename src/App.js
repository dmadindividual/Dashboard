import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './components/Layout/Layout'
import Calendar from './pages/Calendar/Calendar';
import Datagrid from './pages/Datagrid/Datagrid';



function App() {
  return (
    <div  id='dashboard'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="calendar" element={<Calendar/>}/>
        <Route path="user" element={<Datagrid/>}/>
        </Route>
  
      </Routes>

      </BrowserRouter>
      

 
    </div>
  );
}

export default App;
