import TechList from "./ProjesctsList"
import styles from "./style.module.css"


function ProjesctsList() {
  return (
    <section className={styles.projectsSection}>
        <h3 className={styles.titleProjects}>Projetos</h3>
        <TechList />
    </section>
  )
}

export default ProjesctsList

