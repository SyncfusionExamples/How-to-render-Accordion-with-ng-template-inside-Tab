import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabAllModule, AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, TabAllModule, AccordionModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
