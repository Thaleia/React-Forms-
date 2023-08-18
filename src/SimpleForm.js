import { useState } from "react";

function SimpleForm() {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
  
    const addItem = event => {
      event.preventDefault();
      setItems([
        ...items,
        {
          id: items.length,
          name: itemName
        }
      ]);
      setItemName("");
    };
  
    return (
      <>
      <h1>Simple Form</h1>
        <form onSubmit={addItem}>
          <label>Enter items:{' '}           
            <input
              name="item"
              type="text"
              value={itemName}
              onChange={e => setItemName(e.target.value)}
            />
          </label>
          {' '}
          <input type="submit" value="Add Item" />
        </form>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        

      </>
    );
  }

  export default SimpleForm;

