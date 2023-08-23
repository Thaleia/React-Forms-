import { useState } from "react";

export default function Food() {
    const [food, setFood] = useState({
        type: "vegetables",
        food: "green beans",
        harvested: "23/08/2023",
        producer: "papous"
    })

    const harvestFood = () => {
        setFood(previousState => {
            return{...previousState, food: "corn"};
        })
    }

  return (
    <div>
        <h1>UseState update a single object item</h1>
      <p>I love {food.type} and especially {food.food}! {food.producer} harvested some on {food.harvested}.</p>
        <button type="button" onClick={harvestFood}>Update food</button>
   </div>
  )
}
