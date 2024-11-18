import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className='my-2' id="main-container">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default App;
