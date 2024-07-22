import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import StickySocialIcons from './Component/StickySocialIcons';
import Index from './Routes/Index';
import Dashboard from './Admin/Dashboard';
import TaskTable from './Admin/TaskTable';
import AddJob from './Admin/AddJob';
import Login from './Admin/Login';
import OnlineTraining from './Component/OnlineTraining';
import OfflineTraining from './Component/OfflineTraining';
import Internship from './Component/Internship';
import Placement from './Component/Placement';
import SoftwareDevelopmentPage from './Component/SoftwareDevelopmentPage';
import Place from './Component/Place';

function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Index></Index>} />
          <Route path='/admin' element={<Dashboard></Dashboard>}/>
          <Route path='/addjob' element={<AddJob></AddJob>}></Route>
          <Route path='/tasktable' element={<TaskTable></TaskTable>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/internship' element={<Internship></Internship>}></Route>
          <Route path='/onlinetraining' element={<OnlineTraining></OnlineTraining>}></Route>
          <Route path='/offlinetraining' element={<OfflineTraining></OfflineTraining>}></Route>
          <Route path='/softwaredevelopmentpage' element={<SoftwareDevelopmentPage></SoftwareDevelopmentPage>}></Route>
          <Route path='/placement' element={<Place></Place>}></Route>
          <Route path='/jobportal' element={<Placement></Placement>}></Route>
      </Routes>    
      <StickySocialIcons></StickySocialIcons>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
