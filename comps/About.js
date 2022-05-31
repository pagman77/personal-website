import styles from "../styles/About.module.css"


export default function About(){

  return(
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>
            Hi, my name is Michael, and I love solving problems
          </h2>
        </div>
        <div className={styles.card}>
          <p>
            After years of retail and getting burned out, I decided that it was time for a change.
            As a trained musician, I found that there are a lot of paralells between learning an instrument
            and learning a programming language. I am currently attending&nbsp;
            <a href="http://www.rithmschool.com" target="blank">Rithm School</a>
            &nbsp;to hone my skills in full-stack web development.
          </p>
        </div>
      </div>
  )
}


/* <a href="../public/paglione_resume.pdf" download role="button">Download my resume</a> */