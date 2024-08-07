import { Injectable } from '@angular/core';
import { RegisterUserDto } from '../_models/register-user-dto';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  constructor() {}

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      console.log('Podaj poprawny adres e-mail');
      return false;
    }
    return true;
  }

  validatePassword(model: RegisterUserDto): boolean {
    if (model.password.length < 5) {
      console.log('Hasło musi składać się z conajmniej 5 znaków');
      return false;
    }
    if (model.password !== model.repeatPassword) {
      console.log('Podane hasła muszą być jednakowe');
      return false;
    }

    return true;
  }
  validateName(name: string): boolean {
    if (name.length < 3 || name.length > 25) {
      console.log('Dlugość imienia musi mieścić się w zakresie 3-25!');
      return false;
    }
    if (/\d/.test(name)) {
      console.log('Imię nie może zawierać cyfr');
      return false;
    }
    return true;
  }
  validateSurname(surname: string): boolean {
    if (surname.length < 3 || surname.length > 25) {
      console.log('Dlugość nazwiska musi mieścić się w zakresie 3-25!');
      return false;
    }
    if (/\d/.test(surname)) {
      console.log('Nazwisko nie może zawierać cyfr');
      return false;
    }
    return true;
  }
  validateCity(city: string): boolean {
    if (city.length < 3 || city.length > 25) {
      console.log('Dlugość nazwy miasta musi mieścić się w zakresie 3-25!');
      return false;
    }
    if (/\d/.test(city)) {
      console.log('Nazwa miasta nie może zawierać cyfr');
      return false;
    }
    return true;
  }
  validatePostalCode(postalCode: string): boolean {
    const isValidPostalCode = /^\d{2}-\d{3}$/.test(postalCode);

    if (!isValidPostalCode) {
      console.log('Kod pocztowy jest nieprawidłowy');
      return false;
    }
    return true;
  }

  validateDateOfBirth(dateOfBirth: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(dateOfBirth)) {
      console.log(
        'Data urodzenia nie jest w prawidłowym formacie (yyyy-MM-dd).'
      );
      return false;
    }
    return true;
  }
}
