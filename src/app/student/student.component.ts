import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
//INPUT
  @Input() nameStudent?:string; //Le point d'interrogation veut dire que le nom de la variable est facultatif
  levelStudent="Third year";
  statusStudent="A+";

// BEGIN TABLEAU  
students = [
      {
        name:"Moustapha Fall",
        level:"L3",
        status:"A+"
      },
      {
        name:"Ouseynou jop" ,
        level:"L3" ,
        status:"A+"
      },
      {
        name:"Khadim Seck",
        level:"L3",
        status:"A+"
      },
      {
        name:"Moustapha Sock",
        level:"L3",
        status:"A+"
      }
  ]
  // CONSTRUCTEUR
  constructor() { }

  ngOnInit(): void {
  }
  getLevelStudent(){
    return this.levelStudent
  }
  getStatusStudent(){
    return this.statusStudent
  }

}
