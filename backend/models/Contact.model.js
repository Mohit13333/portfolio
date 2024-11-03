import {model, Schema} from 'mongoose';
const contactschema=new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
},
{
    timestamps:true
}
)
const Contact=new model('Contact',contactschema);
export default Contact;