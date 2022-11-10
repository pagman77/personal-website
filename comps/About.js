import Image from "next/image";

export default function About() {
  return (
    <div id='about' className="container-fluid about">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-sm-12 col-md-4 text-center">
          <Image className="music-headshot p-3" src="/music.jpg" alt="Photo of Michael" width={450} height={450} />
        </div>
        <div className="col-sm-12 col-md-4 mx-5">
          <h2 className="mb-3">
            About Me
          </h2>
          <h5 className="mb-5">
            Software Engineer && Musician
          </h5>
          <p>
            I have spent my life consistently learning, growing, and exploring new ideas as a musician since I began playing at the age of ten. To my surprise these core values also correlate to being a successful software engineer. I have spent the last decade combining my experiences in music with a career in retail before I made the recent pivot into the Full Stack Web Development program at&nbsp;
            <a href="http://www.rithmschool.com" target="blank">Rithm School</a>. Rithm provided me with the tools, confidence, and resources to leverage my previous experiences to be creative in my approach. I enjoy leveraging my skills in all three industries to provide creative and impactful solutions as a software engineer.
          </p>
        </div>
      </div>
    </div>
  );
};
