import { projects } from "../../data/projects"
import styles from "./style.module.css"
import gitImg from "../../assets/git-icon.png";


function TechList(){


    return(
    <>
    <ul className={styles.projectNav}>
        {
            projects.map((project,index) => {
                return(
                    <li key={index} id={project.name} className={styles.liProject}>
                        <div className={styles.itemContent}>
                        <span className={styles.nameProject}>{project.name}</span>
                        <span className={styles.descriptionProject}>{project.descricao}</span>
                        <a href="#" className={styles.projectAncora}>Saiba mais</a>
                        </div>
                        <div className={styles.projectDiv}>
                        <img src={gitImg} alt={project.name} className={styles.projectImg} />
                        </div>
                    </li>
                )
            })
        }
    </ul>
    </>
    )
    
}

export default TechList
