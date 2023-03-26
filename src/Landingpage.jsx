import {useEffect, useState} from 'react'
import logo from './assets/Punta-cana-destination-logo.webp'
import whatsapp from './assets/whatsapp.png'
import V1 from './assets/Vehiculo 1.jpeg'
import V2 from './assets/Vehiculo 2.jpeg'
import V3 from './assets/V3.webp'
import V4 from './assets/V7.webp'
import V5 from './assets/V5.webp'
import V6 from './assets/V6.webp'
import { Rutas } from './Rutas'
import { Info } from './Info'



function Landingpage() {
    const [mover, setMover] = useState(false)

    return (
        <div className="md:container mx-auto min-h-screen bg-slate-700 bgColor  ">

            <section className='flex flex-wrap w-ful min-h-max justify-center m-0 bg-white'>
                <section id='top' className='w-full  h-full grid md:grid-cols-2 '>
                    <header className=' grid m-auto md:justify-center  align-middle p-2 md:h-screen w-full bg-white z-10 '>
                      <div className='grid m-auto '>
                      <img src={logo}
                            alt="Punta-cana-destination"
                            className='md:h-60 h-28'/>
                        <div className='flex justify-center'>
                            <a href="https://wa.me/18494530100?text=Hola Necesito Informacion sobre los transportes." target='_blank'><img className='h-10 hidden md:inline'
                                    src={whatsapp}
                                    alt=""/></a>
                        </div>
                        <div className='hidden justify-center my-10  md:flex'>
                            <a href="#mas" className='text-slate-900 '>Saber Más...</a>
                        </div>
                      </div>
                    </header>
                   <div className={`flex justify-center max-w-screen min-h-screen max-h-screen ${mover === true ? 'overflow-scroll' : 'overflow-hidden' } box2  py-2 md:px-16 px-4 text-sm md:text-lg text-white relative `}>
                   <Rutas V1={V2} whatsapp={whatsapp} mover={mover} setMover={setMover}/>
                   <Info V1={V1} whatsapp={whatsapp} mover={mover} setMover={setMover} />
                   </div>

                </section>

                <section id='mas' className='container bg-white min-h-screen'>
                    <div className=' flex flex-wrap md:grid grid-cols-2 p-4 bg-gray-200'>
                        <div className='m-auto'>
                            <img src={V3}
                                className='h-80 object-fill'
                                alt=""/>
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
                            <img src={V4}
                                className='h-80 object-fill'
                                alt="" />
                        </div>

                    </div>
                    <div className='flex flex-wrap md:grid grid-cols-2 p-4 bg-gray-200'>
                        <div className='m-auto'>
                            <img src={V5}
                                className='h-80 object-fill'
                                alt=""/>
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
                                <button className='btn my-4  verde'>¡Haz clic aquí para reservar ahora y disfrutar de una experiencia única!
                                </button>
                            </a>
                        </div>
                        <div className='m-auto'>
                            <img src={V6}
                                className='h-80 object-fill'
                                alt=""/>
                        </div>

                    </div>


                </section>

            </section>

        </div>
    )
}

export default Landingpage
