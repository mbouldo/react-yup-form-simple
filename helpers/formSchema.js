import { object, string, number, date, InferType, array, yup,validateSync,validate } from 'yup';
let formSchema = {
    first_name:{
        value:'',
        validation: string().required('Please enter your first name'),
        label:'First Name',
    },
    last_name:{
        value:'',
        validation: string().required(),
        label:'Last Name',
    },
    email:{
        value:'',
        validation: string().min(3, 'Your email must be 3 characters long').email('Please enter in a valid email'),
        label:'Email'
    },
    pizza:{
        value:'',
        validation: string().required('Give me your pizza NOW'),
        label:'Favorite Pizza'
    }
}

//compile that JSON into a usable object with extra attributes such as blur state, touch state listening...
function compileFormObject(formSchema){
    let compiledFormObject = {
        fields:{
            ...formSchema,
        }
    }

    Object.keys(formSchema).map(function(fieldName, keyIndex) {
        compiledFormObject.fields[fieldName] ={
            focused:false,
            touched:false,
            currentErrors:[],
            ...compiledFormObject.fields[fieldName],
        } 
    })
    return compiledFormObject;
}

//export compiled version of the form (including extra attributes.)
var defaultFormObject = compileFormObject(formSchema);
export default defaultFormObject;