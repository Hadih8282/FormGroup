import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  UsernameValidators } from './username.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit ,DoCheck {
  form!: FormGroup;
  // account!: FormGroup;
  constructor(private fb: FormBuilder, private roter: Router) {
    this.formBuilder();
  }
  ngDoCheck(): void {
    // console.log(this.form);
    console.log(this.form);
    // if(this.username.errors?.["minlength"])
    //   console.log(this.username.errors);
    
     
  }
  
  
  // ngAfterContentChecked(): void {
  //   console.log(this.form.invalid);
  // }
  // ngAfterViewChecked(): void {
  //   console.log(this.form.invalid);
  // }
  // ngAfterView(): void {
  //   console.log(this.form.invalid);
  // }
  // ngDoCheck(): void {
  //   console.log(this.form.invalid);
  // }
  
  
  formBuilder(){
    this.form =  this.fb.group({
      account : this.fb.group({
        username:  [null,[Validators.required, Validators.minLength(3), UsernameValidators.cannotContaintSpace],[UsernameValidators.shouldBeUniquetime]],
        password:   [null, [Validators.required, Validators.minLength(3),UsernameValidators.shouldBeUnique]],
      })
    })


  }


    
  

  login1() {
    this.form.setErrors({
      invalidLogin: true
    })
  }


  get username() {
    // console.log(this.form.controls['username']);
    // console.log(this.form.get('username'));

    return this.form.get('account.username')!;
  
  }
  get password() {
    
    
    return this.form.get('account.password')!;
  }



  ngOnInit(): void {}


  // login() {
  //   let userName = this.form.get('username')?.value;
  //   let password = this.form.get('password')?.value;
  //   if (userName === 'ali' && password == '123') {
  //     this.roter.navigate(['book/create']);
  //     localStorage.setItem('login', 'true');
  //   } else {
  //     alert('username or pawwsord invalid');
  //   }
  //   // console.log(this.form);
    
  // }
}


