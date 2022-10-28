import Image from "next/image";

export default function About() {
  return (
    <div id='about' className="container about">
      <div className="row mt-5 justify-content-center align-items-center text-center my-5">
        <div className="col-sm-12 col-md-4 text-center mx-5">
          <Image className="music-headshot" src="/music.jpg" alt="Photo of Michael" width={450} height={450} />
        </div>
        <div className="col-sm-12 col-md-4 text-star mx-5">
          <h2 className="mb-3">
            About Me
          </h2>
          <h5 className="mb-5">
            Software Engineer && Musician
          </h5>
          <p>
            I have spent my life consistently learning, growing, and exploring as a musician. I found that this directly correlates to being a successful software engineer. I have spent the last decade combining my experiences in music with a career in retail before I made the pivot into the Fullstack Web Development program at&nbsp;
            <a href="http://www.rithmschool.com" target="blank">Rithm School</a>. I enjoy leveraging my skills in all three industries to provide innovative, creative, and meaningful solutions as a software engineer.
          </p>
        </div>
      </div>
    </div>
  );
};
