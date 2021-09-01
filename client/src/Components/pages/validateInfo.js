export default function validateInfo(values) {
    let errors = {};

    //if no name typed respond "name required"
    if(!values.name.trim()) {
        errors.name = "Name required";
    }
    //if no email typed respond "email required"
    if(!values.email) {
        errors.email = "Email required";
        //regex validation
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email is not valid"
    };
    
    if(!values.password) {
        errors.password = "Password required";

    }else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters or more."
    };

    if(!values.password2) {
        errors.password2 = 'Password required';
    }else if (values.password2 !== values.password) {
        errors.password2 = "Passwords do not match"
    };

    return errors;
    
}
