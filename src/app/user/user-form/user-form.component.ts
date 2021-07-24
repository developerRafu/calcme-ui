import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForm } from '../models/user-form';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  errorMsg = '';
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      name: [null, Validators.required, Validators.minLength(5), Validators.maxLength(255)],
      email: [null, Validators.required, Validators.minLength(5), Validators.maxLength(255)],
      telephone: [null, Validators.required, Validators.minLength(5), Validators.maxLength(255)]
    });

  }

  submit() {
    var cont = 0;
    const userForm = this.form.getRawValue();

    Object.keys(userForm).forEach(key => {
      if (userForm[key] == null) {
        cont++
      }
    });

    if (cont > 0) {
      this.errorMsg = 'Preencha o formulário corretamente';
      return;
    }

    this.service.save(userForm)
      .subscribe(
        res => this.router.navigateByUrl(''),
        error => this.errorMsg = error.error.msg
    );
  }
}
