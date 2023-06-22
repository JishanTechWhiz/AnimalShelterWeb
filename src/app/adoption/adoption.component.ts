import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {

  constructor() { }
  registerForm:any;
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      //"UserName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
     //"FirstName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
     "Emails":new FormControl(null,[Validators.required,Validators.email]),
      "Passwords":new FormControl(null,[Validators.required]),
      "conPasswords":new FormControl(null,[Validators.required]),
      "FirstName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "LastName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
     
     });
    
  }

  submitData()
  {
    console.log(this.registerForm.value);
    alert('SuccessFully!!!');
    this.registerForm.reset(); 

  }

  get Emails(){
    return this.registerForm.get('Emails'); 
  }

  get FirstName(){
    return this.registerForm.get('FirstName'); 
  }

  get LastName(){
    return this.registerForm.get('LastName'); 
  }

  
  get conPasswords(){
    return this.registerForm.get('conPasswords'); 
  }
  get Passwords(){
    return this.registerForm.get('Passwords'); 
  }

}
