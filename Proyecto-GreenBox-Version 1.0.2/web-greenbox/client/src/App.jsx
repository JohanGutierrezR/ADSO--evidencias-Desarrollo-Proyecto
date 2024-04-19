import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import TaskFormPage from './pages/TaskFormPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import { TaskProvider } from './context/TasksContext';
import Navbar from './components/Navbar';
import CategoriasPage from './pages/CategoriasPage';
import FrutasPage from './pages/FrutasPage';
import VegetalesPage from './pages/VegetalesPage';
import CerealesPage from './pages/CerealesPage';
import LegumbresPage from './pages/LegumbresPage';
import EspeciasPage from './pages/EspeciasPage';
import ComprarPage from './pages/ComprarPage';
import FechaPage from './pages/FechaPage';
import { AyudaPage } from './pages/AyudaPage';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
      <BrowserRouter>
      <main className='mx-auto'>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          
          <Route element = {<ProtectedRoute />}>
          <Route path='/ayuda' element={<AyudaPage/>}/>
          <Route path='/fecha' element={<FechaPage/>}/>
          <Route path='/comprar' element={<ComprarPage/>}/>
          <Route path='/categorias' element={<CategoriasPage/>}/>
          <Route path='/frutas' element={<FrutasPage/>}/>
          <Route path='/vegetales' element={<VegetalesPage/>}/>
          <Route path='/cereales' element={<CerealesPage/>}/>
          <Route path='/legumbres' element={<LegumbresPage/>}/>
          <Route path='/especias' element={<EspeciasPage/>}/>
          <Route path='/tasks' element={<TasksPage />} />
          <Route path='/add-task' element={<TaskFormPage />} />
          <Route path='/tasks/:id' element={<TaskFormPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          </Route>
        </Routes>
      </main>
      </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
