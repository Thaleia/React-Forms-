import './App.css';
import SimpleForm from './SimpleForm';
import MultipleInputFields from './MultipleInputFields';
import Dropdown from './Dropdown';
import Object from './CarColor';

function App() {
  return (
    <div className="App">
      <SimpleForm />
      <br />
      <MultipleInputFields />
      <br />
      <Dropdown />
      <br />
      <Object />
    </div>
  );
}

export default App;
