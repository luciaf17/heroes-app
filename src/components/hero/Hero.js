import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import getHeroesById from '../helpers/getHeroesById';

const Hero = () => {

  const navigate = useNavigate();

  const {heroeId} = useParams();

  const hero = getHeroesById(heroeId);

  if (!hero) {
    return <Navigate to='/' />
  }

  const handleReturn = () => {
    navigate(-1);
  }

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={`/assets/heroes/${heroeId}.jpg`} alt={hero.superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>
      <div className='col-8 animate__animated animate__fadeInLeft'>
        <h2>{hero.superhero}</h2>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter Ego: </b>{hero.alter_ego}</li>
          <li className='list-group-item'><b>First Appearance: </b>{hero.first_appearance}</li>
          <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
          <li className='list-group-item'><b>Characters: </b>{hero.characters}</li>
        </ul>
        <button className='btn btn-outline-info' onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  )
}

export default Hero