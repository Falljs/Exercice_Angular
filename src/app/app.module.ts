import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyOwnComponentComponent } from './my-own-component/my-own-component.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    MyOwnComponentComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
