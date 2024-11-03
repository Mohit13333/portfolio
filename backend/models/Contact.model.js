import {model, Schema} from 'mongoose';

const contactschema=new Schema({
    Name: {type: 'string', required: true},
    Email: {type: 'string', required: true},
    Message: {type: 'string', required: true},
},
{
    timestamps:true
}
)

const Contact=new model('Contact',contactschema);
export default Contact;