import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListatweetsComponent } from './listatweets.component';

describe('ListatweetsComponent', () => {
  let component: ListatweetsComponent;
  let fixture: ComponentFixture<ListatweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListatweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
