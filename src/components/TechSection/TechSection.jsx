import TechList from "./TechList"
import styles from "./style.module.css"

function TechSection() {

  return (
    <section className={styles.techSection}>
    <h3 className={styles.titleTech}> Tecnologias</h3>
    <TechList />
    </section>
  )
  
}

export default TechSection