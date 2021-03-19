import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentpath: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  
  this.router.events.subscribe((ev) => {
    console.log(location.pathname)
    this.currentpath=location.pathname;
  });

  }

}
