import { useState } from "react";

export default function Object() {
    const [car, setCar] = useState({
        brand: "Range Rover",
        model: "SX4",
        color: "black",
        year: "2023"
    })

    const updateColor = () => {
        setCar(previousState => {return {...previousState, color: "silver"}})
    }
  return (
    <div>
      <h1>Change car color</h1>
      <p>I own a {car.brand} {car.model} in {car.color} bought in {car.year}</p>
      <button
      type="button" onClick={updateColor}>Change color</button>
    </div>
  )
}
