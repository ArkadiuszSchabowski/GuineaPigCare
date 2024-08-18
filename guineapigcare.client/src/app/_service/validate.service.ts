import { Injectable } from '@angular/core';
import { RegisterUserDto } from '../_models/register-user-dto';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  isCorrectName: boolean = false;
  isCorrectSurname: boolean = false;
  isCorrectCity: boolean = false;

  constructor(private toastr: ToastrService) {}

  validatePersonalInformation(model: any): boolean {
    this.isCorrectName = this.validateName(model.name);
    this.isCorrectSurname = this.validateSurname(model.surname);
    this.isCorrectCity = this.validateCity(model.city);

    if (this.isCorrectName && this.isCorrectSurname && this.isCorrectCity) {
      return true;
    }
    return false;
  }
  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      console.log('Podaj poprawny adres e-mail');
      this.toastr.error('Podaj poprawny adres e-mail');
      return false;
    }
    return true;
  }

  validatePasswordRegister(model: RegisterUserDto): boolean {
    if (model.password.length < 5) {
      console.log('Hasło musi składać się z conajmniej 5 znaków');
      this.toastr.error('Hasło musi składać się z conajmniej 5 znaków');
      return false;
    } else if (model.password !== model.repeatPassword) {
      console.log('Podane hasła muszą być jednakowe');
      this.toastr.error('Podane hasła muszą być jednakowe');
      return false;
    }
    return true;
  }
  validatePasswordLogin(password: string): boolean {
    if (password.length < 5) {
      this.toastr.error('Hasło musi składać się z conajmniej 5 znaków');
      return false;
    }
    return true;
  }

  validateName(name: string): boolean {
    if (name.length < 3 || name.length > 25) {
      console.log('Dlugość imienia musi mieścić się w zakresie 3-25!');
      this.toastr.error('Dlugość imienia musi mieścić się w zakresie 3-25!');
      return false;
    } else if (/\d/.test(name)) {
      console.log('Imię nie może zawierać cyfr');
      this.toastr.error('Imię nie może zawierać cyfr');
      return false;
    }
    return true;
  }
  validateSurname(surname: string): boolean {
    if (surname.length < 3 || surname.length > 25) {
      console.log('Dlugość nazwiska musi mieścić się w zakresie 3-25!');
      this.toastr.error('Długość nazwiska musi mieścić się w zakresie 3-25!');
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
      this.toastr.error(
        'Długość nazwy miasta musi mieścić się w zakresie 3-25!'
      );
      return false;
    } else if (/\d/.test(city)) {
      console.log('Nazwa miasta nie może zawierać cyfr');
      this.toastr.error('Nazwa miasta nie może zawierać cyfr');
      return false;
    }
    return true;
  }
}
