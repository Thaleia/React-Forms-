import './App.css';
import SimpleForm from './SimpleForm';
import MultipleInputFields from './MultipleInputFields';
import Dropdown from './Dropdown';

function App() {
  return (
    <div className="App">
      <SimpleForm />
      <br />
      <MultipleInputFields />
      <br />
      <Dropdown />
    </div>
  );
}

export default App;
