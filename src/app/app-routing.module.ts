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
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['home']);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'login-teacher', component: LoginTeacherComponent},
  { path: 'login-student', component: LoginStudentComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'status', component: StatusComponent },
  { path: 'instructor-page', component: InstructorPageComponent, canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redirectUnauthorizedToHome} },
  { path: 'instructor-page/edit', component: InstructorProfileComponent,canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redirectUnauthorizedToHome} },
  { path: 'search', component: SearchComponent },
  { path: 'student-page', component: StudentPageComponent, canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redirectUnauthorizedToHome} },
  { path: 'student-page/edit', component: StudentProfileComponent, canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redirectUnauthorizedToHome} },
  { path: 'search/view-profile', component: ViewProfileComponent, canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redirectUnauthorizedToHome} },
  { path: 'chat', component: ChatComponent, canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redirectUnauthorizedToHome}},
  
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
