import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import getHeroesByName from "../helpers/getHeroesByName";
import HeroCard from "../hero/HeroCard";
import { useForm } from "../hooks/useForm";
import queryString from 'query-string';

const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);


  const [values, handleChange] = useForm({
    searchText: q,
  });

  const { searchText } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }

  const heroesFiltereds = useMemo( () => getHeroesByName(q), [q]);

  return (
    <>
      <h1>Búsqueda</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Busca un héroe"
              value={searchText}
              onChange={handleChange}
              name="searchText"
              autoComplete="off"
            />
            <button
              className="btn btn-outline-primary mt-2"
              type="submit"
              onClick={handleSubmit}
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
            (q === '') ? 
              <div className="alert alert-info">
                Busca un héroe para comenzar
              </div>
              : ( heroesFiltereds.length === 0) &&
                  <div className="alert alert-danger">
                    No hay resultados: {q}
                  </div>
              }
         
            {
              heroesFiltereds.map((hero) => (
              <HeroCard key={hero.id} {...hero}  />
            ))}
          
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
