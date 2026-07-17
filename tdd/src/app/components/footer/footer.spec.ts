import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input', async () => {
    fixture.componentRef.setInput('year', '2025');
    const compiled = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
    expect(compiled.querySelector('p')?.textContent).toContain('2025');
  });
});
