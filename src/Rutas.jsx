import { Card } from "./Card"
import flecha from './assets/icons8-flecha-responder-50.png'


export const Rutas = ({V1, whatsapp, mover, setMover}) => {
    
    return (
        <div className={
            `${
                mover === true ? 'translate-x-0 ' : 'translate-x-[800px]  '
            } ease-in-out duration-500 w-ful  flex-wrap gap-10 justify-center my-auto px-4 flex`
        }>
            <img onClick={() => setMover(!mover)} className="absolute  md:-left-10 -left-0" src={flecha}/>

            <Card/>

        </div>
    )
}
