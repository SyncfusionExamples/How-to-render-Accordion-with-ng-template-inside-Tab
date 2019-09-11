import { Component, ViewEncapsulation } from '@angular/core';

/**
 * Default Tab Component
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  // Mapping Tab items Header property
  public headerText: Object = [{ text: "Accordion" },
  { text: "Facebook", 'iconCss': 'e-facebook' }, { text: "WhatsApp", 'iconCss': 'e-whatsapp' }];

}