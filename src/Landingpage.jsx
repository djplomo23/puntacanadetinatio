import { useEffect, useState } from 'react'
import logo from './assets/Punta-cana-destination-logo.webp'
import whatsapp from './assets/whatsapp.png'
import V1 from './assets/Vehiculo 1.jpeg'
import V2 from './assets/Vehiculo 2.jpeg'
import flecha from './assets/icons8-doble-arriba-24.png'


function Landingpage() {
  
  return (
    <div className="md:container mx-auto min-h-screen bg-slate-700 bgColor  ">
        
         <section className='flex flex-wrap w-ful min-h-max justify-center m-0 bg-white'>
            <section id='top' className='w-full  h-full grid md:grid-cols-2 '>
            <header className=' grid m-auto md:justify-center  align-middle p-2 '><img src={logo} alt="Punta-cana-destination" className='md:h-60 h-28' /> <a href="https://wa.me/18494530100?text=Hola Necesito Informacion sobre los transportes." className='flex justify-center' target='_blank' ><img className='h-10 hidden md:inline' src={whatsapp} alt="" /></a>
            <a href="#mas" className='text-slate-900 hidden justify-center my-10  md:flex'>Saber Mas...</a>
            </header>
              <div className='w-full flex box2 flex-wrap justify-center md:p-10 py-2 md:px-16 px-4 text-sm md:text-lg text-white '>
                
              <div className='w-full flex flex-wrap justify-center md:my-10 p-0 m-0'>
               
                  <img className='h-80 shadow-md rounded-sm   ' src={V1} alt="" />
               
              <a href="https://wa.me/18494530100?text=Hola Necesito Informacion sobre los transportes." target='_blank' ><img className='h-16 py-2 inline md:hidden' src={whatsapp} alt="" /></a>
              
              </div>
              <h2 className=' ' >¡Reserva ahora tu transporte desde el aeropuerto hasta el hotel en Punta Cana con nosotros y comienza a disfrutar tus vacaciones desde el primer momento! Ofrecemos una amplia variedad de opciones de transporte, incluyendo van, jepeta y suburban, así como un servicio de transporte desde el aeropuerto de Santo Domingo hasta los hoteles en Punta Cana. ¡Haz tu reserva hoy y déjanos encargarnos del resto!</h2>
              <a href="https://wa.me/18494530100?text=Hola Necesito Informacion sobre los transportes." target='_blank'>
              <button className='btn my-4'>¡Haz clic aquí para reservar ahora y disfrutar de una experiencia única! </button></a>
              <a href="#mas" className='text-slate-900 flex justify-center my-10  md:hidden'>Saber Mas...</a>
              
              
              </div>
              
            </section>

            <section id='mas' className='container bg-white min-h-screen'>
              <div className=' flex flex-wrap md:grid grid-cols-2 p-4 bg-gray-200'>
                <div className='m-auto'>
                  <img src={V1} className='h-80' alt="" />
                </div>
                <div className='flex m-auto content-center'>
                  <p>
                  Si buscas un servicio de transporte desde el aeropuerto hasta el hotel en Punta Cana que ofrezca seguridad, comodidad y una experiencia inolvidable, ¡has llegado al lugar adecuado! En nuestro servicio, nos enorgullecemos de contar con choferes altamente capacitados y experimentados que se dedican a garantizar tu seguridad y comodidad en todo momento.
                  </p>
                </div>
              </div>
              <div className='flex flex-wrap-reverse md:grid grid-cols-2 p-4 bg-gray-300'>
              <div className='flex m-auto content-center'>
                  <p>
                  Nuestros vehículos están equipados con tecnología de vanguardia para proporcionar la mejor comodidad posible en tu viaje, y nuestros choferes conocen los mejores lugares para visitar en Punta Cana. Desde los restaurantes más populares hasta los lugares más hermosos, nuestros choferes te llevarán a los lugares más destacados de la zona para que puedas disfrutar al máximo de tus vacaciones.
                  </p>
                </div>
                <div className='m-auto'>
                  <img src={V1} className='h-80' alt="" />
                </div>
                
              </div>
              <div className='flex flex-wrap md:grid grid-cols-2 p-4 bg-gray-200'>
                <div className='m-auto'>
                  <img src={V1} className='h-80' alt="" />
                </div>
                <div className='flex m-auto content-center'>
                  <p>
                  En nuestro servicio, también nos aseguramos de que todos nuestros vehículos sean mantenidos regularmente para garantizar la seguridad en el camino. Y no te preocupes si llegas tarde o temprano, ¡estaremos allí para recogerte a tiempo y sin demoras!
                  </p>
                </div>
              </div>
              <div className='flex flex-wrap-reverse md:grid grid-cols-2 p-4 bg-gray-300'>
              <div className='grid m-auto content-center'>
                  <p>
                  En resumen, si buscas seguridad, comodidad y una experiencia inolvidable en tu viaje a Punta Cana, nuestro servicio de transporte es la opción ideal para ti. Reserva ahora para disfrutar de la mejor atención y servicio de nuestros choferes experimentados y altamente capacitados. ¡No te arrepentirás!
                  
                  </p>
                  <a href="https://wa.me/18494530100?text=Hola Necesito Informacion sobre los transportes." target='_blank' className='flex justify-center '>
              <button className='btn my-4  verde'>¡Haz clic aquí para reservar ahora y disfrutar de una experiencia única! </button></a>
                </div>
                <div className='m-auto'>
                  <img src={V1} className='h-80' alt="" />
                </div>
                
              </div>
              
              

            </section>
            
         </section>
       
    </div>
  )
}

export default Landingpage
