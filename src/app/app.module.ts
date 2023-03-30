import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { StatusComponent } from './pages/status/status.component';
import { LoginTeacherComponent } from './pages/login/login-teacher/login-teacher.component';
import { LoginStudentComponent } from './pages/login/login-student/login-student.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment.development';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { InstructorPageComponent } from './pages/instructor-page/instructor-page.component';
import { SearchComponent } from './pages/search/search.component';
import { InstructorProfileComponent } from './pages/instructor-profile/instructor-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    StatusComponent,
    LoginTeacherComponent,
    LoginStudentComponent,
    InstructorPageComponent,
    InstructorProfileComponent,
    StudentPageComponent,
    StudentProfileComponent,
    SearchComponent,
    CalendarComponent,
    ChatComponent,
    ViewProfileComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    
    
  ],
  exports: [CalendarModule],
})
export class AppModule {}
