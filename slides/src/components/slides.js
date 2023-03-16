import { useState } from "react";

export default function Slide({ films }) {
  const [index, setIndex] = useState(0);

  let film = films[index];

  return (
    <>
      <Title title={film.title} />
      <Card film={film} />
      <ButtonBar film={film} setIndex={setIndex} />
    </>
  );
}

function Title({ title }) {}
function Card({ film }) {}

function Image({ src }) {}

function Body({ film }) {}

function ButtonBar({ film }, { setIndex }) {}

function StartOverButton({ film }, { setIndex }) {}

function BackButton({ film }, { setIndex }) {}

function NextButton({ film }, { setIndex }) {}
