import styles from "./style.module.css"

function AboutSection() {

  return (
    <section className={styles.sectionAbout}>
      <h3 className={styles.titleAbout}> Sobre mim</h3>
      <p className={styles.textAbout}> Sou uma profissional formada em Biomedicina e com mestrado em Microbiologia,  atualmente estou estudando Desenvolvimento Web e tenho paixão pela programação, busco aplicar minhas habilidades em uma equipe criativa e inovadora, combinando meu interesse pela tecnologia com minha formação anterior para resolver problemas de forma eficiente e criativa.</p>
    </section>
  )

}

export default AboutSection