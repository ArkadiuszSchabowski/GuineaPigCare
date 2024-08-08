export class RegisterUserDto{
    email: string = "";
    password: string = "";
    repeatPassword: string = "";
    name: string = "";
    dateOfBirth: Date | undefined = undefined;
    surname: string = "";
    city: string = "";
    postalCode: string = "";
};