import Navbar from '../src/Components/Navbar/Navbar'
import CustomerList from './Components/Customer/CustomerList/CustomerList';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container my-3">
      <CustomerList />
      </div>
    </div>
  );
}

export default App;
