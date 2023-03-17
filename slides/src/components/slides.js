import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Slide({ films }) {
  const [index, setIndex] = useState(0);

  let film = films[index];

  return (
    <>
      <Title title={film.title} />
      <Card film={film} />
      <ButtonBar maxIndex = {films.length - 1} index={index} setIndex={setIndex} />
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
  return (
    <div className="card-body">
      <h5 className="card-title">{film.original_title}</h5>
      <p className="card-text"><small className="text-muted">{film.release_date}</small></p>
      <p className="card-text">{film.description}</p>
    </div>
  )
}

function ButtonBar({ maxIndex, setIndex, index }) {
  return (
    <div className="button-ba d-flex justify-content-center">
      <StartOverButton setIndex={setIndex} />
      <BackButton maxIndex = { maxIndex } index ={index} setIndex={setIndex} />
      <NextButton maxIndex = { maxIndex } index = {index} setIndex = {setIndex} />
    </div>
  )
}

function StartOverButton({ setIndex }) {
  return (
    <button type="button" className="mx-2 btn btn-primary" onClick={() => setIndex(0)}>
      <FontAwesomeIcon icon={solid('arrow-rotate-left')} /> Start Over
    </button>
  )
}

function BackButton({ maxIndex, index, setIndex }) {

  function handleBack() {
    console.log(index)
    index -= 1;
    if (index = 0) {
      return setIndex(maxIndex)
    }
    return setIndex(prevCount => prevCount - 1)
    console.log(index)
  }

  return (
    <button type="button" className="mx-2 btn btn-primary" onClick={handleBack()}>
      <FontAwesomeIcon icon={solid('caret-left')} /> Back
    </button>
  )
}

function NextButton({ maxIndex, index, setIndex }) {
  function handleNext() {
    console.log(index)
    index += 1;
    if (index > maxIndex) {
      return setIndex(0)
    }
    console.log(index)
    return setIndex(prevCount => prevCount + 1)
  }
  return (
    <button type="button" className="mx-2 btn btn-primary">
      Next <FontAwesomeIcon icon={solid('caret-right')} onClick={handleNext()} />
    </button>
  )
}
 