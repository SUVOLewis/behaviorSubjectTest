import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  user: string;
  editUser: string; // the NGModel

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.cast.subscribe(user => this.user = user);
    console.log('Subscribed component one');
  }

  editTheUser() {
    this.usersService.editUser(this.editUser); // The parameter is the NEW user
  }

}
