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
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SharedModule } from "./shared/shared.module";
import { RegisterValidatorsComponent } from './validators/register-validators/register-validators.component';
import { InstructorsPageComponent } from './pages/instructors-page/instructors-page.component';

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
        RegisterValidatorsComponent,
        InstructorsPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
    ]
})
export class AppModule { }
