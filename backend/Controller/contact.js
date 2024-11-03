import Contact from "../models/Contact.model.js";
const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    res.status(200)
      .send(`<body style="background-color:pink;"><h1 style="color:blue;">Message Sent Successfuly<span>😊</span></h1>
            <h1 style="color:green;text-align:end;margin-top:600px">Thank you for contating</h1>
            </body>`);
  } catch (error) {
    return res.status(500).send(`<body style="background-color:gold; text-align:center;"><h1 style="color:Red;margin-top:300px;">Message Not Delivered<span>😩</span></h1></body>`);
  }
};
export default contactForm;
