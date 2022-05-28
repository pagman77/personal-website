export default function AboutMe(){

  return(
    <div className="container mt-5 pt-5 mb-5 pb-5">
      <div className="row d-flex w-100 justify-content-center align-items-center">
        <div className="col-md-5 text-center text-lg-start mt-2 pt-2">
          <h2>
            <div className="display-6">Hi, my name is Michael, and I love to code</div>
          </h2>
        </div>
        <div className="col-md-5 text-center text-lg-start mt-2 pt-2 mb-4">
          <p>
            After years of retail and getting burned out, I decided that it was time for a change.
            As a trained musician, I found that there are a lot of paralells between learning an instrument
            and learning how to code. I am currently attending&nbsp;
            <a className="text-decoration-none text-dark" href="http://www.rithmschool.com" target="blank">Rithm School</a>
            &nbsp;to hone my skills in full-stack web development.
          </p>
          <hr />
          <a className="btn btn-sm" href="../public/paglione_resume.pdf" download role="button">Download my resume</a>
        </div>
      </div>
    </div>
  )
}