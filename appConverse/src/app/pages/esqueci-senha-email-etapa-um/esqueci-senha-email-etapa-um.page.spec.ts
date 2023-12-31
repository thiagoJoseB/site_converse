import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsqueciSenhaEmailEtapaUmPage } from './esqueci-senha-email-etapa-um.page';

describe('EsqueciSenhaEmailEtapaUmPage', () => {
  let component: EsqueciSenhaEmailEtapaUmPage;
  let fixture: ComponentFixture<EsqueciSenhaEmailEtapaUmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EsqueciSenhaEmailEtapaUmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
