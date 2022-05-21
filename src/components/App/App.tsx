import appStyles from './App.module.css'
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import MainPage from '../MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import PostDetail from '../PostDetail/PostDetail';
import { useTypedSelector } from '../../hooks/useTypedSelector';

function App() {
  const {getUsers, getPosts, getComments} = useActions()
  const post = useTypedSelector(state => state.posts.post)
  const user = useTypedSelector(state => state.users.user)

  useEffect(() => {
    getUsers()
    getPosts()
    getComments()
  }, [])

  return (
    <div className={appStyles.app}>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/:name' element={<Profile/>}/>
        <Route path='/:name/:id' element={<PostDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
