import { useState } from "react";

// export default function MyForm() {
//     const [myCar, setMyCar] = useState("Volvo");
  
//     const handleChange = (event) => {
//       setMyCar(event.target.value)
//     }
  
//     return (
//       <form>
//         <select value={myCar} onChange={handleChange}>
//           <option value="Ford">Ford</option>
//           <option value="Volvo">Volvo</option>
//           <option value="Fiat">Fiat</option>
//         </select>
//       </form>
//     )
//   }

// export default function MyForm() {
//     const [myFlowers, setMyFlowers] = useState("Lilies");

//     const handleChange = event => {
//         setMyFlowers(event.target.value)
//     }

//     return (
//             <form >
//                 <select value={myFlowers} onChange={handleChange}>
//                     <option value="Lilies">Lilies</option>
//                     <option value="Jasmine">Jasmine</option>
//                     <option value="Tulips">Tulips</option>
//                 </select>
//             </form>
//     )
// }

export default function Dropdown() {
    const [kidsToys, setKidsToys] = useState('T-Rex Dinosaur');

    const handleChange = event => {
        setKidsToys(event.target.value);
    }
    
        const love = () => {
          alert("Yes, you are being loved!");
        }

    return (
        <>
        <h1>Dropdown</h1>
        <form>
            <select value={kidsToys} onChange={handleChange}>
                <option value="T-Rex Dinosaur">T-Rex Dinosaur</option>
                <option value="Playmobil">Playmobil</option>
                <option value="Lego">Lego</option>
                <option value="Hug">Hugs and kisses from mom!</option>
            </select>
        </form>
        <button onClick={love}>You are loved!</button>
        </>
    )
}
