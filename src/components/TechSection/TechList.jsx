import { technologies } from "../../data/technologies"
import styles from "./style.module.css"

function TechList(){


    return(
    <>
    <ul className={styles.techNav}>
        {
            technologies.map((tech,index) => {
                return(
                    <li key={index} id={tech.name} className={styles.liTech}>
                        <img src={tech.img} alt={tech.name} className={styles.techImg} />
                        <span className={styles.textTech}>{tech.name}</span>
                    </li>
                )
            })
        }
    </ul>
    </>
    )
    
}

export default TechList