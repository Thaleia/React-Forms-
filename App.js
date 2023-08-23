import './App.css';
import SimpleForm from './SimpleForm';
import MultipleInputFields from './MultipleInputFields';
import Dropdown from './Dropdown';
import CarColor from './CarColor';
import Food from './Food';

function App() {
  return (
    <div className="App">
      <SimpleForm />
      <br />
      <MultipleInputFields />
      <br />
      <Dropdown />
      <br />
      <CarColor />
      <br />
      <Food />
    </div>
  );
}

export default App;
