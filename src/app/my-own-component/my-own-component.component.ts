import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-my-own-component',
  templateUrl: './my-own-component.component.html',
  styleUrls: ['./my-own-component.component.css']
})
export class MyOwnComponentComponent implements OnInit {
//CONSTRUCTEUR
  constructor() { }

  ngOnInit(): void {}

//TABLEAU VIDE
list: any=[];

//BEGIN METHODES
  onAddTask(item:string){
    this.list.push({id:this.list.length,name:item});
  }
  onDeleteTask(item:string){
    this.list.pop(item);
  }
//END METHODES DECLARATIONS
}
