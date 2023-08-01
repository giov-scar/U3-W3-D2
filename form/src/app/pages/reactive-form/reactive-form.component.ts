import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  form!: FormGroup;
  passwordError:string = ""

  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.form = this.fb.group({
      authData: this.fb.group({
        name:this.fb.control(null, [Validators.required]),
        surname:this.fb.control(null, [Validators.required]),
        password:this.fb.control(null, [Validators.required]),
        confirmPassword:this.fb.control(null, [Validators.required])
      }),
      username:this.fb.control(null),
      gender:this.fb.control(null),
      biography:this.fb.control(null),
      profileImg:this.fb.control(null)
    })
  }

  send(){
    if(this.form.value.authData.password === this.form.value.authData.confirmPassword){
      console.log(this.form.value);
      this.form.reset()
    } else this.passwordError = "Passwords don't match"
  }

  isValid(fieldName:string){
    return this.form.get(fieldName)?.valid
  }

  isTouched(fieldName:string){
    return this.form.get(fieldName)?.touched
  }
}


