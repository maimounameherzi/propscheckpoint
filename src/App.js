
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomProfile from './Components/Profile/CustomProfile';

function App() {
  return (
    <div className="App">
      <CustomProfile
      name = "name"
      username =  "username"
      email = "email"
      />
    </div>
  );
}

export default App;
