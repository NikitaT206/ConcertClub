import appStyles from './App.module.css'
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import MainPage from '../MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import PostDetail from '../PostDetail/PostDetail';

function App() {
  const {getUsers, getPosts, getComments} = useActions()

  useEffect(() => {
    getUsers()
    getComments()
    getPosts()
  }, [])

  return (
    <div className={appStyles.app}>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/users/:name' element={<Profile/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/users/:name/:id' element={<PostDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
