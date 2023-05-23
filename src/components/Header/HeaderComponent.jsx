import ButtonsNav from "../Buttons/Button"
import HeaderMenu from "./HeaderMenu"
import styles from "./styles.module.css"
import logo from "../../assets/portfolio.png";

function HeaderComponent () {

    return(
     <header className={styles.header}>
       <img src={logo} alt="logo-portfólio" className={styles.imgHeader}/>
       <HeaderMenu /> 
       <ButtonsNav content={"Contato"} classe={"headerButton"}/>
      </header>
    )

}
export default HeaderComponent