export class UpdateUserDto{
    name: string = "";
    surname: string = "";
    city: string = "";
    postalCode: string = "";
    dateOfBirth: Date | undefined = undefined;
}