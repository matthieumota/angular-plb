import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaComponent } from './pizza.component';
import { Pizza } from '../../models/pizza';
import { provideHttpClient } from '@angular/common/http';

describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('pizza', new Pizza(1, 'Toto', 10));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button'); // Fermer la pizza
    let data!: Pizza | null;
    component.closed.subscribe(d => data = d);
    button?.click();
    fixture.detectChanges();

    expect(data?.name).toBe('Toto');
  });
});
