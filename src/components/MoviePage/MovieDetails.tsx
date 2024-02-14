import React from 'react'
import Dates from '../Data/Dates'
import DateItems from './Date/DateItems'
import './MovieDetails.css'
import Area_search from './Location/Area_search'
import { GrLocation   } from "react-icons/gr";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import DropdownMenu from './Location/DropdownMenu'
import MovieShowList from './MovieShow/MovieShowList'
import { NavLink } from 'react-router-dom'

function MovieDetails() {
    console.log(Dates)
  return (
    <div>
        <div className='main-con-movie'>
            <div className='main-con-movie-left'>
                {/* hrading */}
                <div>
                    <h2 className='heading-h2'>JADWAL</h2>
                    <p className='heading-p'>Pilih jadwal bioskop yang akan kamu tonton</p>
                </div>

                {/* date */}
                <div className='Date'>
                    <div className='side-scroll'><FaChevronLeft /></div>
                    {
                        Dates.length>0 &&  Dates.map((date, index)=>{
                            return <DateItems date={date} key={index}/>
                        })
                    }
                    <div className='side-scroll'><FaChevronRight /></div>
                </div>

                {/* location droup down menu */}
                <div className='location-city'>

                    <GrLocation  className='location-icon' />
                    <DropdownMenu/>                   
                </div>


                {/* search area  */}
                <div>
                     <Area_search/>

                </div>

                {/* movieshows */}
                <div>
                    <MovieShowList/>
                </div>
                
            </div>




            <div  className='main-con-movie-right'>

                <div className='main-con-image-des'>
                    <div className='spider-img'>
                        <img src='./img/haft-spiderman.png'/>
                    </div>
                    <div className='description-h'>
                        <h3>SPIDERMAN : NO WAY HOME</h3>
                        <div className="movie-details">
                            <div className="category">
                                <ul>
                                    <li>Genre</li>
                                    <li>Durasi</li>
                                    <li>Sutradara</li>
                                    <li>Rating Usia</li>
                                </ul>
                            </div>
                            <div className="info">
                                <ul>
                                    <li>Action</li>
                                    <li>2 jam 28 menit</li>
                                    <li>Jon Watts</li>
                                    <li>SU</li>
                                </ul>
                            </div>
                        </div>


                    </div>

                </div>

                <div className='right-bottom'>
                <div className='main-book-button'>
                    <div className='book-h'>
                        GRAND INDONESIA CGV
                    </div>
                    <div className='book-date'>
                        Kamis, 16 Desember 2021
                    </div>
                    <div className='book-type-time'>
                        <div className='book-type'>
                            REGULAR 2D 
                        </div>
                        <div className='book-type book-time'>
                            14:40 
                        </div>
                    </div>
                    <div className='book-des'>
                        <small>* Pemilihan kursi dapat dilakukan setelah ini</small>
                    </div>
                    <div className='book-button'>
                        <NavLink to="/sitepage"><h3 className='book-but-text'>BELI SEKARANG</h3></NavLink>

                    </div>

                </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default MovieDetails