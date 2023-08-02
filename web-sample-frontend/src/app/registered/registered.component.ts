import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/UserService.service';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (user) => {
        this.username = user.name;
        this.password = user.password;
      });
  }

}
