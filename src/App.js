import React from 'react';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import BannerMain from './components/BannerMain';
import DadosIniciais from './data/dados_iniciais.json';
import Footer from './components/Footer';
//import './App.css';

function App() {
  return (
    
    <div style={{background: "#363636"}}>
        <Menu />

        <BannerMain
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        videoDescription={"Veja como esse cotocão destroi o jogo"}
        url={DadosIniciais.categorias[0].videos[0].url}
        />

        <Carousel 
        ignoreFirstVideo={true}
        category={DadosIniciais.categorias[0]}
        />

        <Footer />
    </div>
  );
}

export default App;
