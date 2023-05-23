import styles from "./style.module.css"
import ButtonsNav from "../Buttons/Button"
import banner from "../../assets/banner-img.png"
function BannerSection () {

    return(
        <section className={styles.sectionBanner}>
        <div className={styles.bannerDivSection}>
            <span className={styles.bannerSpanName}>Lais Lessa</span>
            <h1 className={styles.bannerTitle}>Bem vindo ao meu portfólio</h1>
            <span className={styles.bannerSpanText}>Uma frase interessante sobre mim</span>
            <ButtonsNav content={"Saiba mais"} classe={"buttonBanner"}/>
        </div>
        <div className={styles.divBanner}>
        <img src={banner} alt="imagem" className={styles.imgBanner}/>
        </div>
        </section>
    )

}
export default BannerSection