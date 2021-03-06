import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import Search from './pages/Search';


function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='about'>About</Link>
                    <Link to='about'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='about'>Gmail</Link>
                    <Link to='about'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>

            </div>

            <div className='home__body'>
                <img src="https://pngimg.com/uploads/google/google_PNG19631.png" alt="">
                </img>

                <div className='home__inputContainer'>
                <Search />
                
                </div>
            </div>

            
        
        </div>
    )
}

export default Home