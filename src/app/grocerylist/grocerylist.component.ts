import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Itodolist } from '../itodolist';
import { AutofocusDirective } from '../autofocus.directive';
import {  ViewChild, ElementRef } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';



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
  beforeedit:string = ''
  filter:string = 'all'




  constructor(private elementRef: ElementRef) { }

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
    this.beforeedit = todo.title
    todo.edit = true
  }


  doneedit(todo:Itodolist):void {
    if(todo.title.trim().length === 0) {
      todo.title = this.beforeedit
    }
    todo.edit = false
  }

  selectall():void {
    this.filter ='checkall'
    this.todo.forEach(todo => todo.completed = true)
    console.log(this.todo)
    console.log("After")
  }

  todofilter():Itodolist[] {
    if (this.filter === 'all') {
      return this.todo;
    } else if (this.filter === 'active') {
      return this.todo.filter(todo => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todo.filter(todo => todo.completed);
    } else if(this.filter === 'clear') {
      return this.todo = []
    }

    return this.todo
  }

}
