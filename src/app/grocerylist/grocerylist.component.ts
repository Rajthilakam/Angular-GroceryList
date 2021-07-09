import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Itodolist } from '../itodolist';
import {  ViewChild, ElementRef } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GrocerylistComponent implements OnInit {

  date = new Date();
  todo:Itodolist[] = []
  todoitem:string = ''

  constructor() { }

  ngOnInit(): void {

    this.todo = [{
      'id':1,
      'title':'Buy Milk',
      'completed':false,
      'edit':false,
    },
    {
      'id':2,
      'title':'Ice creams and Choclates',
      'completed':false,
      'edit':false,
    },
    {
      'id':3,
      'title':'Cannom Pizza',
      'completed':false,
      'edit':false,
    },
    {
      'id':4,
      'title':'Vegetable Burger',
      'completed':false,
      'edit':false,
    },


  ]

  console.log(this.todoitem)

  }

  addtolist(){
    if(this.todoitem.trim().length === 0){
      return
    }
      this.todo.push({
        'id':5,
        'title':this.todoitem,
        'completed':false,
        'edit':false
      })
    this.todoitem = ''
    console.log(this.todo)
  }

  deletelist(id:number):void {
    this.todo = this.todo.filter(todo => todo.id != id)
  }

  editlist(todo:Itodolist):void {
    todo.edit = true
  }


  doneedit(todo:Itodolist):void {
    todo.edit= false
  }


}
