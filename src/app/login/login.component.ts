import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private Router: Router
  ) { }

  ngOnInit() {
    init_plugins();
  }

  public login() {
    this.Router.navigateByUrl('/dashboard');
  }

}
