import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the GanttModule for the Gantt component
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, GanttModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
