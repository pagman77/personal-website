import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import { EnvelopeFill, PersonFill } from 'react-bootstrap-icons';
import axios from 'axios';

export default function Contact() {

  const intialFormData = {
    name: "",
    email: "",
    subject: "freelance",
    comments: ""
  };

  const [formData, setFormData] = useState(intialFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const res = await axios.post("/api/email", formData);
    setFormData(intialFormData);
  }

  return (
    <div id='page-container'>
      <Navbar />
      <div id="wrap" className='container contact'>
        <div className="row d-flex justify-content-center w-100 h-25 mt-5">
          <div className="col-12 w-50">
            <h3 className='text-center'>Get in touch with me!</h3>
            <form className="my-3 p-3 rounded" onSubmit={handleSubmit}>

              {/* NAME */}

              <label className="mb-1" htmlFor="name">Name</label>
              <div className='input-group mb-3'>
                <span className='input-group-text'><FontAwesomeIcon icon={faUser} /></span>
                <input
                  className="form-control d-inline-flex"
                  id="name"
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
                  autoComplete={"true"}
                />
              </div>

              {/* EMAIL */}

              <label className="mb-1" htmlFor="email">Email</label>
              <div className='input-group mb-3'>
                <span className='input-group-text'><FontAwesomeIcon icon={faEnvelope} /></span>
                <input
                  className="form-control"
                  id="email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  autoComplete={"true"}
                />
              </div>

              {/* INQURY TYPE */}

              <label htmlFor="subject" className="form-label mb-1">What is your question about?</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faMessage} />
                </span>
                <select id="subject" className="form-select" name="subject" defaultValue={formData.subject} onChange={handleChange}>
                  <option value="freelance">Freelance Work</option>
                  <option value="employment">Job Opportunity</option>
                  <option value="blog">Blog</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <label className="mb-1" htmlFor="comments">I&apos;d love to hear your thoughts.</label>
              <div className="form-group mb-3">
                <textarea id="comments"
                  rows={6}
                  className="form-control"
                  name="comments"
                  onChange={handleChange}
                  value={formData.comments}></textarea>
              </div>
              <div className="text-center m-2">
                <button type="submit" className="contact-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}