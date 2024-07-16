export class UserDto{
    email: string = "";
    name: string = "";
    age: Date | undefined = undefined;
    surname: string = "";
    city: string = "";
    postalCode: string = "";
    ownerAnimals: string[] = [];
}