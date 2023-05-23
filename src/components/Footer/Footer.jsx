import styles from "./styles.module.css"
import iconGit from "../../assets/github-icon.png"
import iconLink from "../../assets/linkedin-icon.png"
import iconWhats from "../../assets/whatsapp-icon.png"


function FooterComponent() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerDiv}>
        <h2 className={styles.footerTitle}>Contato</h2>
        <div className={styles.footerImgs}>
            <img src={iconWhats} alt="icone Whatsapp" className={styles.imgWhats}/>
            <img src={iconLink} alt="icone Linkedin" className={styles.imgLink}/>
            <img src={iconGit} alt="icone Github" className={styles.imgGit}/>
        </div>
      </div>
            <span className={styles.textFooter}>Todos os direitos reservados - Lais Lessa</span>
    </footer>
  )
}

export default FooterComponent


