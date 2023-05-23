
import style from "./styles.module.css"

function ButtonsNav({content, classe}){

    return(
        <>
        <button className={style[classe]}>{content}</button>
        </>

    )
}

export default ButtonsNav