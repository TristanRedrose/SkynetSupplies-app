import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginFormComponent } from './components/auth/Forms/loginForm/loginForm.component';
import { RegistrationFormComponent } from './components/auth/Forms/registrationForm/registrationForm.component';
import { AdminPageComponent } from './components/business/admin/admin.component';
import { AddCategoryComponent } from './components/business/workspace/administrator/addCategory/addCategory.component';
import { EmployeeRegistrationFormComponent } from './components/business/workspace/administrator/addEmployee/registrationForm.component';
import { CategoryTableComponent } from './components/business/workspace/administrator/categoryTable/categoryTable.component';
import { EditCategoryFormComponent } from './components/business/workspace/administrator/editCategory/editCategory.component';
import { EditEmployeeFormComponent } from './components/business/workspace/administrator/editEmployee/editEmployee.component';
import { EmployeeTableComponent } from './components/business/workspace/administrator/employeeTable/employeeTable.component';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminGuard } from './guards/admin.guard';
import { EmployeeGuard } from './guards/employee.guard';
import { EditSubcategoryComponent } from './components/business/workspace/administrator/editSubcategory/editSubcategory';
import { CustomerTableComponent } from './components/business/workspace/employee/customerTable/customerTable.component';
import { EditCustomerComponent } from './components/business/workspace/employee/editCustomer/editCustomer.component';
import { AddProductComponent } from './components/business/workspace/employee/addProduct/addProduct.component';
import { ProductsComponent } from './components/business/workspace/employee/products/products.component';
import { EditProductComponent } from './components/business/workspace/employee/editProduct/editProduct.component';

const routes: Routes = [
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard], children: [
    {path: 'employee', component: EmployeeTableComponent},
    {path: 'employee/add', component: EmployeeRegistrationFormComponent},
    {path: 'employee/edit', component: EditEmployeeFormComponent},
    {path: 'categories', component: CategoryTableComponent},
    {path: 'categories/add', component: AddCategoryComponent},
    {path: 'categories/edit', component: EditCategoryFormComponent},
    {path: 'subcategories/edit', component: EditSubcategoryComponent},
  ]},
  { path: 'employee', component: AdminPageComponent, canActivate: [EmployeeGuard], children: [
    {path: 'customer', component: CustomerTableComponent},
    {path: 'customer/edit', component: EditCustomerComponent},
    {path: 'product/add', component: AddProductComponent},
    {path: 'product/edit', component: EditProductComponent},
    {path: 'products', component: ProductsComponent}
  ]},
  { path: '', component: LayoutComponent, children: [
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'auth', component: AuthComponent, children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegistrationFormComponent },
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
