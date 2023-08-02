import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/UserService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(private userService: UserService, private router: Router) {
    this.username = '';
    this.password = '';
   }

  ngOnInit(): void {
  }

  login(): void {
  const userDto = {
    name: this.username,
    password: this.password
  };

  this.userService.createUser(userDto).subscribe(
    (response) => {
      console.log('User created:', response);
      this.router.navigate(["../registered"]);
    }
  );
  }
}
