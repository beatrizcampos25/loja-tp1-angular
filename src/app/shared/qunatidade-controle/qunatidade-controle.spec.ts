import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QunatidadeControle } from './qunatidade-controle';

describe('QunatidadeControle', () => {
  let component: QunatidadeControle;
  let fixture: ComponentFixture<QunatidadeControle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QunatidadeControle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QunatidadeControle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
