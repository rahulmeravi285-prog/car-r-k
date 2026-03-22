import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CARD_DIRECTIVES, IgcFormsModule, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { CarModelsPageComponent } from './car-models-page.component';

describe('CarModelsPageComponent', () => {
  let component: CarModelsPageComponent;
  let fixture: ComponentFixture<CarModelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarModelsPageComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CARD_DIRECTIVES, IgcFormsModule, IgxButtonDirective, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarModelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
