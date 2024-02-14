// // MovieBlog.tsx
// import React, { useEffect } from 'react';
// import movies from '../Data/poster_movie';
// import './HomeMovieBlog.css'
// import { SlLike } from "react-icons/sl";
// import { useNavigate } from 'react-router-dom';
// import { NavLink} from 'react-router-dom';

// const MovieBlog = () => {



//    useEffect(() => {
//     window.scrollTo(0, 0); // Scrolls to the top when the component mounts
//   }, []);


//   const navigate = useNavigate();
//   const goToBack = () => {
//     navigate(-1);
    
//   };
//   return (
//     <div className='blog-poster-movie-main-con'>
//       <div onClick={goToBack}>
//         <h1 className="back-but">Back</h1>
//       </div>

//       <div>

//         {movies.map((movie, index) => (
//           <NavLink key={index} to={`/movie/${movie.name}`} className='blog-one-con'>
//           <div className='blog-img'>
//             <img src={movie.image} alt={movie.name} />
//           </div>
//           <div className='blog-details'>
//             <span className='blog-tag'>{movie.tag}</span>
//             <h2 className='blog-title'>{movie.name}</h2>
//             <p><span className='blog-rele-date'>Description :  </span><span className='blog-desc'>{movie.description.slice(0, 398)}...</span></p>
//             <p className='blog-like-icon-count'><SlLike className='blog-like-icon' /><span className='blog-like-count'> {movie.like}</span></p>
//             <p><span className='blog-date '>{movie.releaseDate}</span></p>
//             <div className="premium-type postions">
//                 <div className="prem-1 pad">{movie.type1}</div>
//                 <div className="prem-2 pad">{movie.type2}</div>
//                 <div className="prem-3 pad">{movie.type3}</div>
//             </div>

//           </div>
//         </NavLink>
//       ))}
//       </div>

//     </div>
//   );
// };

// export default MovieBlog;


// MovieBlog.tsx
import React, { useEffect } from 'react';
import movies from '../Data/poster_movie';
import './HomeMovieBlog.css';
import { SlLike } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const MovieBlog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navbar/>
      <div>
        <div className='blog-poster-movie-main-con'>
      <div>
        {movies.map((movie, index) => (
          <div key={index} className='blog-one-con'>
            {index % 2 === 0 ? ( // Alternate display pattern based on index
              <NavLink to={`/movie/${movie.name}`} className='left-side'>
                <div className='blog-img'>
                  <img src={movie.image} alt={movie.name} />
                </div>
                <div className='blog-details'>
                 <div className='bloghead'>
                    <h2 className='blog-title'>{movie.name}</h2>
                    <span className='blog-tag'>{movie.tag}</span>
                  </div>
                  <p><span className='blog-rele-date'>Description :  </span><span className='blog-desc'>{movie.description.slice(0, 398)}...</span></p>
                  <p className='blog-like-icon-count'><SlLike className='blog-like-icon' /><span className='blog-like-count'> {movie.like}</span></p>
                  <p><span className='blog-date'>{movie.releaseDate}</span></p>
                  <div className="premium-type postions">
                    <div className="prem-1 pad">{movie.type1}</div>
                    <div className="prem-2 pad">{movie.type2}</div>
                    <div className="prem-3 pad">{movie.type3}</div>
                  </div>
                </div>
              </NavLink>
            ) : (
              <>
                <div className='blog-details'>
                  <div className='bloghead'>
                    <h2 className='blog-title'>{movie.name}</h2>
                    <span className='blog-tag'>{movie.tag}</span>
                  </div>
                  
                  <p><span className='blog-desc'>{movie.description.slice(0, 398)}...</span></p>
                  <p className='blog-like-icon-count'><SlLike className='blog-like-icon' /><span className='blog-like-count'> {movie.like}</span></p>
                  <p><span className='blog-date'>{movie.releaseDate}</span></p>
                  <div className="premium-type postions">
                    <div className="prem-1 pad">{movie.type1}</div>
                    <div className="prem-2 pad">{movie.type2}</div>
                    <div className="prem-3 pad">{movie.type3}</div>
                  </div>
                </div>
                <NavLink to={`/movie/${movie.name}`} className='blog-img'>
                  <img src={movie.image} alt={movie.name} />
                </NavLink>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
      </div>
      <hr/>
      <Footer/>
    </div>
  );
};

export default MovieBlog;
