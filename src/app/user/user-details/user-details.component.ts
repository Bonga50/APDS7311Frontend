import { Component,OnInit  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit  {

  signUpForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value

    console.warn(this.signUpForm.value);
    this.userService.addTask_service(
      this.signUpForm.value.name!!,
      this.signUpForm.value.surname!!,
      this.signUpForm.value.username!!,
      this.signUpForm.value.email!!,
      this.signUpForm.value.password!!
    );

  // Clear the form
  this.signUpForm.reset();

  // Display an alert message
  alert('Form submitted successfully!');

  }


}
