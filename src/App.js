import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/Components/Navbar/Navbar'
import CustomerList from './Components/Customer/CustomerList/CustomerList';
import CustomerForm from './Components/Customer/CustomerForm/CustomerForm';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <CustomerList />
        }>
        </Route>
        <Route path='/customerform' element={
          <CustomerForm />
        }>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
