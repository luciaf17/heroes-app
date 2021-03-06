import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {
  return (
    <div className='col animate__animated animate__fadeInLeft'>
        <div className='card'>
            
            <div className='row no-gutters '>
                <div className='col-4'>
                <img src={`/assets/heroes/${id}.jpg`} alt={superhero} className='img-thumbnail ' />
                </div>
                <div className='col-8 animate__animated animate__fadeInLeft'>
                <div className='card-body '>
                    <h5 className='card-title'>{superhero}</h5>
                    <p className='card-text'>{alter_ego}</p>
                    {
                        (alter_ego !== characters) &&
                        <p className='text-muted'>{characters}</p>
                    }
                    <p className='card-text'>
                        <small className='text-muted'>{first_appearance}</small>
                    </p>
                    <Link to={`/hero/${id}`}>
                        Ver más
                    </Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default HeroCard