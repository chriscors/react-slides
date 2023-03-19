import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useParams, Link, Navigate, useNavigate, NavLink } from "react-router-dom";
import films from "./film-data.json";


export default function Slide() {
  
  let { ind } = useParams();
  ind = Number(ind)
  if (ind === null || ind > films.length - 1 || ind < 0) {
    return <Navigate  to="/0" key={0}/>
  }
  let film = films[ind];
  console.log(film)


  return (
    <>
      {/* <NavBar/> */}
      <Title title={film.title} />
      <Card film={film} />
      <ButtonBar maxIndex={films.length - 1} ind={ind} />
    </>
  );
}

function Title({ title }) {
  return <h4 className="title">{title}</h4>;
}
function Card({ film }) {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <Image src = {film.image}/>
        
          <div className="col-md-7">
            <Body film={film} />
          </div>
        </div>
      </div>
    </>
  )
}

function Image({ src }) {
  return (
    <div className="col-md-5 img-container">
      <img src={src} alt="Movie Cover" className="img-fluid rounded-start" />
    </div>
  )
}

function Body({ film }) {
  return (<>
    <div className="card-body">
      <h5 className="card-title">{film.original_title}</h5>
      <p className="card-text"><small className="text-muted">{film.release_date}</small></p>
      <p className="card-text">{film.description}</p>
    </div>
    </>
  )
}

function ButtonBar({ maxIndex, ind }) {
  return (
    <div className="button-bar d-flex justify-content-center">
      <StartOverButton ind = {ind}/>
      <BackButton maxIndex={maxIndex} ind={ind} />
      <Select ind={ind} />
      <NextButton maxIndex = { maxIndex } ind={ind} />
    </div>
  )
}

function StartOverButton({ ind }) {
  if (ind !== 0) {
    return (
      <Link to={'/0'} className="mx-2 btn btn-primary" key = {0}>
        <FontAwesomeIcon icon={solid('arrow-rotate-left')} /> Start Over
      </Link> )
  } return (
      <button type="button" className="mx-2 btn btn-primary" disabled={true}>
        <FontAwesomeIcon icon={solid('arrow-rotate-left')} /> Start Over
      </button>
    )
  
}

function BackButton({ ind }) {

  if (ind !== 0) {
    return (
      <Link to={`/${ind - 1}`} className="mx-2 btn btn-primary" key={ind - 1}>
        <FontAwesomeIcon icon={solid('caret-left')} /> Back
      </Link>)
  } return (
      <button type="button" className="mx-2 btn btn-primary" disabled={true}>
        <FontAwesomeIcon icon={solid('caret-left')} /> Back
      </button> 
  )
}

function NextButton({ maxIndex, ind }) {
  if (ind !== maxIndex) {
    return (
      <Link to={`/${ind + 1}`} disabled={ind === maxIndex} key={ind+1} className="mx-2 btn btn-primary">
        Next <FontAwesomeIcon icon={solid('caret-right')} />
      </Link>
    )
  } return (
    <button type="button"  disabled={true} className="mx-2 btn btn-primary">
      Next <FontAwesomeIcon icon={solid('caret-right')}/>
    </button>
  )
}

 
function Select({ ind }) {
  const filmy = films[ind].title
  console.log('select:', ind, filmy)
  const navigate = useNavigate()
  function handleSelect(filmTitle) {
    let selectedIndex = films.map(film => film.title).indexOf(filmTitle)
    navigate(`/${selectedIndex}`);
  }
  function truncate(str, n){
  return (str.length > n) ? str.slice(0, n-1) + '...' : str;
};

  return (
    <>
      <select name="select-film" id="selectFilm" className="mx-1 form-select-sm" value={filmy} onChange={e=> handleSelect(e.target.value)}>
        {films.map(film => <option value={film.title} key={film.title} >{truncate(film.title, 25)}</option>)}
      </select>
    </>
  )
}


function NavBar() {
  return (<>
    <div className="navbar">
      {films.map(film => {
        return <NavLink to={`/${films.indexOf(film)}`} style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>{film.title}</NavLink>
      })}
    </div>
  </>)
}