// import React from 'react'
// import './Poster.css'
// import movies from '../../components/Data/poster_movie'
// import { NavLink } from 'react-router-dom'

// const Poster = () => {
//   return (
//     <div>
         
//          <div className="horizontal-scroll-view">
//       {movies.map((movie) => (
//         <div className="card" key={movie.id}>
//           <NavLink to="moviepage">
//             {/* Adjust the src attribute to point to the correct image path */}
//             <img src={movie.image} className="abc" alt={movie.name} />
//             <h2 className="movietitle">{movie.name}</h2>
//           </NavLink>
//           <div className="premium-group">
//             <div className="insidediv">
//               <div className="premium1">{movie.type1}</div>
//               {/* Assuming there are only 3 types as mentioned */}
//               <div className="premium2">{movie.type2}</div>
//               <div className="premium2">{movie.type3}</div>

//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   )
// }

// export default Poster

import React, { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import './Poster.css';
import movies from '../../components/Data/poster_movie';
import { NavLink } from 'react-router-dom';

const Poster = () => {
  const [startIndex, setStartIndex] = useState(0);
  const moviesPerPage = 2;

  const handleNext = () => {
    if (startIndex + moviesPerPage < movies.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0); 
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(movies.length - moviesPerPage); 
    }
  };

  return (
    <div>
      <div className="horizontal-scroll-view">
        {(
            <div className="scroll-circle" onClick={handlePrev}><FaChevronLeft /></div>
        )}
        <div className='center-main-con card'>
          {movies.slice(startIndex, startIndex + moviesPerPage).map((movie) => (
          <div className="" key={movie.id}>
            <NavLink to="moviepage">
              <img src={movie.image} className="abc" alt={movie.name} />
              <h2 className="movietitle">{movie.name}</h2>
            </NavLink>
            <div className="premium-type">
                <div className="prem-1 pad">{movie.type1}</div>
                <div className="prem-2 pad">{movie.type2}</div>
                <div className="prem-3 pad">{movie.type3}</div>
            </div>
          </div>
        ))}
        </div>
        { (
            <div className="scroll-circle" onClick={handleNext}><FaChevronRight /></div>
        )}
      </div>
    </div>
  );
};

export default Poster;
