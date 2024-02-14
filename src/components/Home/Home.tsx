import React from 'react'
import Navbar from './Navbar'
import Poster from './Poster'
import Advertice from './Advertice'
import Admovie from './Admovie'
import SuggestedMovie from './SuggestedMovie'
import { RootState } from '../Redux/store/store';
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const { phoneNumber, password } = useSelector((state: RootState) => state.login);
  console.log('-----',phoneNumber, password)
  return (
    <div>
        <Navbar/>
        <Poster/>
        <Advertice/>
        <Admovie/>
        <SuggestedMovie/>
        <Footer/>
    </div>
  )
}
export default Home