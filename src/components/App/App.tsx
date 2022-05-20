import appStyles from './App.module.css'
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import MainPage from '../MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={appStyles.app}>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
