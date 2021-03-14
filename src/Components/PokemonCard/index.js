import { useState } from 'react';
import s from './pokemon.module.css'
import cardBackSide from '../../Assets/card-back-side.jpg'

const PokemonCard = ({name,img,id,type,values}) => {
    const [isActive,setActive] = useState(false)
    const handleActive = () => {
        setActive(!isActive)
    }
    return (
        <div className={s.root} onClick  = {handleActive}>
            <div className={`${s.pokemonCard} ${isActive && s.active}`}>
                <div className={s.cardFront}>
                    <div className={`${s.wrap} ${s.front}`}>
                        <div className={`${s.pokemon} ${s[type]}`}>
                            <div className={s.values}>
                                <div className={`${s.count} ${s.top}`}>{values.top}</div>
                                <div className={`${s.count} ${s.right}`}>{values.right}</div>
                                <div className={`${s.count} ${s.bottom}`}>{values.bottom}</div>
                                <div className={`${s.count} ${s.left}`}>{values.left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.cardBack}>
                    <div className={`${s.wrap} ${s.back}`}>
                        <img src = {cardBackSide} alt={name} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonCard;