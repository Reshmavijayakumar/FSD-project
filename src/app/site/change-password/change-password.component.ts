import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  detailsSaved = true;
  
  onSubmit(changeDetailsForm: NgForm) {
    
    console.log("login successfully");
    this.router.navigate(['login'])
  }
}
