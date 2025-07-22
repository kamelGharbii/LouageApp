import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUserListPage } from './admin-user-list.page';

describe('AdminUserListPage', () => {
  let component: AdminUserListPage;
  let fixture: ComponentFixture<AdminUserListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
