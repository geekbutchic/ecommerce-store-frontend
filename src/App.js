import React from "react";
import Footer from "./components/Footer";
import Header  from './components/Header';
import HomeScreen  from './screens/HomeScreen';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <Header/>
      <main className="py-3">
      <Container>
      <h1 className="text-center"><i className="fab fa-pushed"></i>NERO</h1>
      <HomeScreen/>
      </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
