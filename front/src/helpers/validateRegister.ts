import { IErrorsProps,  } from "@/interfaces/types";

export const validateRegister = (input: IErrorsProps) => {
    const errors: IErrorsProps = {
        name: "",
        email: "",
        password: "",
        address: "",
        phone: ""
    };

    const{ name, email, password, address, phone} = input

    const validEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLocaleLowerCase());
    };

    const validPhone = (phone: string) => {
        const re = /^[0-9]{10,}$/; 
        return re.test(phone);
    };

    const validPassword = (password: string) => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(password);
    };

    if (!name) {
        errors.name = "Username is required"
    } else if (name.length < 4) {
        errors.name = "Username must have at least 4 caracter"
    }

    if (!email) {
        errors.email = "Email is required";
    } else if (!validEmail(email)) {
        errors.email = "Unvaliable email"
    }

    if (!address) {
        errors.address = "Address is required";
    } else if (address.length < 6) {
        errors.address = "Address must have at least 10 characters";
    }

    if (!phone) {
        errors.phone = "Phone number is required";
    } else if (!validPhone(phone)) {
        errors.phone = "Phone number must be numeric and contain at least 10 digits";
    }

    if (!password) {
        errors.password = "Password is required";
    } else if (password.length < 8) {
        errors.password = "Password must have at least 8 caracters";
    }  else if (!validPassword(password)) {
        errors.password = "Password must have at least a number and a letter"
    }
        
    return errors
}