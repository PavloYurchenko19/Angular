import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/interface/IUsers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUsers;
  constructor() { }

  ngOnInit(): void {
  }

}
