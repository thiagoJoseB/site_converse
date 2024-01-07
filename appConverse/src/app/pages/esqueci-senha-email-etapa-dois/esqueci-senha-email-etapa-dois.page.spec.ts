import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsqueciSenhaEmailEtapaDoisPage } from './esqueci-senha-email-etapa-dois.page';

describe('EsqueciSenhaEmailEtapaDoisPage', () => {
  let component: EsqueciSenhaEmailEtapaDoisPage;
  let fixture: ComponentFixture<EsqueciSenhaEmailEtapaDoisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EsqueciSenhaEmailEtapaDoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
