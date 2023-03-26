export const Info = ({V1, whatsapp, mover, setMover}) => {
    return (
        <div className={
            `${
                mover === true ? '-translate-x-[800px] absolute top-0  ' : 'translate-x-0 absolute top-0 '
            } ease-in-out duration-500 w-full flex justify-center flex-wrap mt-6 mx-auto px-4 `
        }>


            <div className='w-full flex flex-wrap justify-center md:my-10 p-0 m-0'>

                <img className='h-80 shadow-md rounded-sm   '
                    src={V1}
                    alt=""/>

                    <div className="w-full flex justify-center m-4">
                    <button onClick={
                        () => setMover(!mover)
                    }
                    className=' text-white bg-white-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-100 p-2'>Ver Rutas</button>
                    </div>

                

            </div>
            
            <h2 className=' '>¡Reserva ahora tu transporte desde el aeropuerto hasta el hotel en Punta Cana con nosotros y comienza a disfrutar tus vacaciones desde el primer momento! Ofrecemos una amplia variedad de opciones de transporte, incluyendo van, jepeta y suburban, así como un servicio de transporte desde el aeropuerto de Santo Domingo hasta los hoteles en Punta Cana. ¡Haz tu reserva hoy y déjanos encargarnos del resto!</h2>
            <a href="https://wa.me/18494530100?text=Hola Necesito Informacion sobre los transportes." target='_blank'>
                
                <button className='btn my-4 pb-4'>¡Haz clic aquí para reservar ahora y disfrutar de una experiencia única!
                </button>
            </a>
            <a href="#mas" className='text-slate-900 flex justify-center my-10  md:hidden'>Saber Mas...</a>


        </div>
    )
}
