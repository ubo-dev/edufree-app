import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { StatusComponent } from './pages/status/status.component';
import { LoginTeacherComponent } from './pages/login/login-teacher/login-teacher.component';
import { LoginStudentComponent } from './pages/login/login-student/login-student.component';
import { SearchComponent } from './pages/search/search.component';
import { InstructorProfileComponent } from './pages/instructor-profile/instructor-profile.component';
import { InstructorPageComponent } from './pages/instructor-page/instructor-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "login-teacher", component: LoginTeacherComponent },
  { path: "login-student", component: LoginStudentComponent },
  { path: "register", component: RegisterComponent }, 
  { path: "status", component: StatusComponent },
  { path: "instructor-page", component: InstructorPageComponent},
  { path: "instructor-page/edit", component: InstructorProfileComponent},
  { path: "search", component: SearchComponent},
  { path: "student-page", component: StudentPageComponent},
  { path: "student-page/edit", component: StudentProfileComponent},
  { path: "**", redirectTo: "home" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
