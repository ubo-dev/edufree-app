import { InstructorsPageComponent } from './pages/instructors-page/instructors-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { StatusComponent } from './pages/status/status.component';
import { LoginTeacherComponent } from './pages/login/login-teacher/login-teacher.component';
import { LoginStudentComponent } from './pages/login/login-student/login-student.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "login-teacher", component: LoginTeacherComponent },
  { path: "login-student", component: LoginStudentComponent },
  { path: "register", component: RegisterComponent }, 
  { path: "status", component: StatusComponent },
  { path: "instructors-page", component: InstructorsPageComponent},
  { path: "student-page", component: SearchComponent},
  { path: "**", redirectTo: "home" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
