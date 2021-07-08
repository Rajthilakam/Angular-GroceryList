import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GrocerylistComponent implements OnInit {

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
