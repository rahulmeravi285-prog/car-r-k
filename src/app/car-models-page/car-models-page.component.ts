import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-car-models-page',
  imports: [IGX_SELECT_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_CARD_DIRECTIVES, IgcFormsModule, IgxButtonDirective, IgxIconComponent, FormsModule],
  templateUrl: './car-models-page.component.html',
  styleUrls: ['./car-models-page.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarModelsPageComponent {
  public priceList1SelectedItem?: string;
  public ratingList1SelectedItem?: string;
  public categoryList1SelectedItem?: string;
  public brandList1SelectedItem?: string;
  public ngModel = 4.5;
  public ngModel1 = 4;
  public ngModel2 = 4.8;
  public ngModel3 = 4.2;
  public ngModel4 = 4.9;
  public ngModel5 = 4.6;
  public ngModel6 = 4.7;
  public ngModel7 = 4.9;
  public ngModel8 = 4.3;
  public ngModel9 = 3.9;
  public ngModel10 = 4.1;
  public ngModel11 = 4.4;
}
