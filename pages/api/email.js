import emailjs from '@emailjs/browser';
import axios from 'axios';
import FormData from 'form-data';

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const SERVICE_ID = process.env.SERVICE_ID;
const EMAIL_API_URL = process.env.EMAIL_API_URL;

export default async function sendEmail(req, res) {
  const { name, email, subject, comments } = req.body;
  const data = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: { name, email, subject, comments }
  };
  try {
    const response = await axios({
      method: 'post',
      url: EMAIL_API_URL,
      data: data
    });
    res.status(200).json({ msg: "Thanks for your email!" });
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Ooops, something went wrong" });
  }

}