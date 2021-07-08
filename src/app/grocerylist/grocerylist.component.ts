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

  editlist():void{
    console.log("edit the list")
  }

  deletelist():void{
    console.log("delete the list")
  }

  constructor() { }

  ngOnInit(): void {



  }

}
