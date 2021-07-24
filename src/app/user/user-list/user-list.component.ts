import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[];
  error = false;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(res => {
      this.users = res;
      console.log(res);
    }, error => this.error = true)
  }

  redirect(){
    this.router.navigateByUrl('new');
  }
}
