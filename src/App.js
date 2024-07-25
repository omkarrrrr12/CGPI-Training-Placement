import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
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
import Course from './Component/Course';
import { ContactForm } from './Component/ContactForm';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/tasktable" element={<TaskTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/onlinetraining" element={<OnlineTraining />} />
          <Route path="/offlinetraining" element={<OfflineTraining />} />
          <Route path="/softwaredevelopmentpage" element={<SoftwareDevelopmentPage />} />
          <Route path="/placement" element={<Place />} />
          <Route path="/jobportal" element={<Placement />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <StickySocialIcons />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
