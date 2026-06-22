import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'


function Whatsapp() {
    return (
        <FloatingWhatsApp phoneNumber='+5531971743236' accountName='Fale com alguem estremamente gente boa e brabissimo' chatMessage='Opa mande um olá para ver se esta tudo certo' statusMessage='' placeholder='Digite a sua mensagem' allowClickAway={true} allowEsc={true}/>
    );
}

export default Whatsapp;