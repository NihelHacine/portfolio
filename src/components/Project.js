import React from 'react';
import { useState } from 'react';
import '../Project.css'
import AfficheP from './AfficheP';

function Project() {
  const [projet, setprojet] = useState([
    {
        name : 'To do list : Redux (state management : reducers/actions .. ) using reactjs',
        video : 'video2.mp4',
    },
    {
        name : 'MovieApp : Frontend app allows users to search movies, add movie or update movie (Redux) using reactjs',
        video : 'video1.mp4',
    },
    {
        name : 'Tacapes Mall : fullstack e-commerce website using MERN stack allows users to buy from gabes shops',
        video : 'video4.mp4',
    },
    {
        name : 'SGPA : e-commerce website using html5-css3 and php for sale of pastry products',
        video : 'video3.mp4'
    },
  ]);
  console.log(projet)

  return (
    <div className='project' id='portfolio'>
    <h2 className='projectTitle' >MY PORTFOLIO  </h2>
    <div className="ag-format-container">
    {projet.map((el) => ( <AfficheP  el={el}/>
        ))}
      </div>
    </div>
  )
}

export default Project