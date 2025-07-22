import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUserFormPage } from './admin-user-form.page';



describe('AdminUserFormPage', () => {
  let component: AdminUserFormPage;
  let fixture: ComponentFixture<AdminUserFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
