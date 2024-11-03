import Contact from "../models/Contact.model.js";

const contactForm=(async (req,res) => {

    try {
        const response=req.body;
       const data= await Contact.create(response);
       Contact.push(data);
        return response.status(200).json({message:"message send successfully"})
    } catch (error) {
        console.log("Error in contact form",error);
        return res.status(500).json({message:"message not delivered"});
    }

});

export default contactForm;