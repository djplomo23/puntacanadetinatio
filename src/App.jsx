
import logo from './assets/Punta-cana-destination-logo.webp'
import whatsapp from './assets/whatsapp.png'
import V1 from './assets/Vehiculo 1.jpeg'
import V2 from './assets/Vehiculo 2.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function App() {
  
  return (
    <div className="md:container mx-auto min-h-screen bg-slate-700 bgColor  ">
        <header className=' flex md:justify-between justify-center items-center p-2 '><img src={logo} alt="Punta-cana-destination" className='h-28 ' /> <a href="https://wa.me/18494530100?text=Hola Necesito Informacion sobre los transportes." target='_blank' ><img className='h-10 hidden md:inline' src={whatsapp} alt="" /></a></header>
         <section className='flex flex-wrap w-ful min-h-max justify-center m-0'>
            <section className='w-full  h-full grid grid-rows-2 '>
              <div className='w-full flex flex-wrap justify-center md:my-10 p-0 m-0'>
                <Carousel width={300} dynamicHeight={true} infiniteLoop showThumbs={false} autoPlay={true}>
                  
                    
                  <img className='h-56 rounded-sm   ' src={V1} alt="" />
                  <img className='h-56 rounded-sm   ' src={V2} alt="" />
                   

                </Carousel>
              <a href="https://wa.me/18494530100?text=Hola Necesito Informacion sobre los transportes." target='_blank' ><img className='h-16 py-2 inline md:hidden' src={whatsapp} alt="" /></a>
              </div>
              <div className='w-full flex flex-wrap justify-center md:p-10 py-2 md:px-16 px-4 text-sm md:text-lg text-white '>
              <h2 className=' ' >¡Reserva ahora tu transporte desde el aeropuerto hasta el hotel en Punta Cana con nosotros y comienza a disfrutar tus vacaciones desde el primer momento! Ofrecemos una amplia variedad de opciones de transporte, incluyendo van, jepeta y suburban, así como un servicio de transporte desde el aeropuerto de Santo Domingo hasta los hoteles en Punta Cana. ¡Haz tu reserva hoy y déjanos encargarnos del resto!</h2>
              
              <button className='btn'><a href="https://wa.me/18494530100?text=Hola Necesito Informacion sobre los transportes." target='_blank'>¡Haz clic aquí para reservar ahora y disfrutar de una experiencia única!</a> </button>
              </div>
              
            </section>
            
         </section>
       
    </div>
  )
}

export default App
