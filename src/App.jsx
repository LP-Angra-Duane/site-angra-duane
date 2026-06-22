import React from 'react';
import Autoridade from './componentes/autoridade/Autoridade';
// import Faq2 from './componentes/faq/Faq2';
import Formulario from './componentes/formulario/Formulario';
import Oferecimento from './componentes/oferecimento/oferecimento';
import Beneficios from './componentes/beneficios/Beneficios';
import Depoimentos from './componentes/depoimentos/Depoimentos';
import HeroSection from './componentes/hero/HeroSection';
import FAQ from './componentes/faq/FAQ';
import Footer from './componentes/footer/Footer';
// import Whatsapp from './tools/Whatsapp';
// import HeroFormSection from './componentes/formulario/HeroFormSection';


function app02() {
    return (
        <>
            <HeroSection/>
            <Autoridade/>
            <Oferecimento/>
            <Beneficios/>
            <Depoimentos/>
            <Formulario/>
            <FAQ/>
            <Footer/>
        </>
    );
}

export default app02;