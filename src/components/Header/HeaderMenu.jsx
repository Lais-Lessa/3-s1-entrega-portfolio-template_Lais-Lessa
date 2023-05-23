import styles from "./styles.module.css"

function HeaderMenu(){

    const menu = ["Sobre", "Slack", "Projetos"]

    return(
    <>
    <ul className={styles.headerNav}>
        {
            menu.map((item,index) => {
                return(
                    <li key={index} id={item} className={styles.liHeader}>{item}</li>
                )
            })
        }
    </ul>
    </>
    )
    
}

export default HeaderMenu