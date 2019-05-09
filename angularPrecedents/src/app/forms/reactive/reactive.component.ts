import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  constructor() {}

// Must Add ReactiveFormsModule to App.Module or Custom_Module

  // ------------------------- Reactive Forms ------------------ //

  genders = ['male', 'female'];

  forbiddenText = ['fuck', 'rass', 'shit', 'dick', 'bullshit', 'pussy'];

  existingEmails = ['test2@test', 'test2@test.com'];

  reactiveForm: FormGroup;



  onSubmit() {


  }


  asyncErrorFromServer(formField: FormControl): Promise<any> | Observable<any>  {

    console.log('here');
    const promise =  new Promise<any>((resolve, reject) => {

      setTimeout(() => {

        if (this.existingEmails.includes(formField.value.trim())) { // field has a value // trim() to remove whitespaces
             resolve({ textIsForbidden: true}); } else { resolve(null); } // When using a promise we resolve
  }, 1500); }
  );
    return promise;
  }


   // ThrowError at invalid text             //   Accepted type string array  // Return Type boolean
  customValidatorForbiddenText(formField: FormControl): {[str: string]: boolean} {
  //  if (this.forbiddenText.indexOf(control.value) !== -1) {  // if entered text exist at an index within the forbidden array

 // console.log(formField);
  let match = false;

  if (formField.value) { // field has a value
    const formFieldArray = formField.value.split(' '); // split field string value into an array
    this.forbiddenText.filter(elements => { // extra array items
      if (formFieldArray.includes(elements)) { match = true; }
    });

  }

  if (match) { // if two arrays share a mutual value

   // if entered text exist at an index within the forbidden array
       return {forbiddenText: true }; // Return true if text exist in forbidden text array
      }
  return null; // Must not return false, always return null

  }


  ngOnInit() {

    // Create a new instance of the FormGroup variable. Must instantiate all FormControls
    this.reactiveForm = new FormGroup({

                            // default value, sync validators
      first: new FormControl(null, {validators: [Validators.required, Validators.minLength(2),
         this.customValidatorForbiddenText.bind(this)]}),
      second: new FormControl(null, [Validators.required, Validators.minLength(2)], // Must not be placed in a named array for Async
       this.asyncErrorFromServer.bind(this)),  // For async validation must not be placed in a named array
      third: new FormControl('111', {validators: [Validators.required, Validators.minLength(1)]}),
      gender: new FormControl('male', {validators: [Validators.required, Validators.minLength(2)]}),

    });
  }

}
