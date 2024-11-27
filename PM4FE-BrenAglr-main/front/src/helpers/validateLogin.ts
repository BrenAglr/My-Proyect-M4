import { IErrorsProps, ILoginProps } from "@/interfaces/types";

export const validateLogin = (input: ILoginProps) => {
    const errors: IErrorsProps = {
        email: "",
        password: ""
    };
    const{ email, password } = input

    const validEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLocaleLowerCase());
    };

    const validPassword = (password: string) => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(password);
    };


    if (!email) {
        errors.email = "Email is required";
    } else if (!validEmail(email)) {
        errors.email = "Unvaliable email"
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
