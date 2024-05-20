import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// icon
import { IconModule } from 'src/app/shared/icon/icon.module';

import { BoxedLockscreenComponent } from './boxed-lockscreen';
import { BoxedPasswordResetComponent } from './boxed-password-reset';
import { BoxedSigninComponent } from './boxed-signin';
import { BoxedSignupComponent } from './boxed-signup';
import { CoverLockscreenComponent } from './cover-lockscreen';
import { CoverLoginComponent } from './cover-login';
import { CoverPasswordResetComponent } from './cover-password-reset';
import { CoverRegisterComponent } from './cover-register';

// headlessui
import { MenuModule } from 'headlessui-angular';

const routes: Routes = [
    {
        path: 'auth/boxed-lockscreen',
        component: BoxedLockscreenComponent,
        title: 'Boxed Lockscreen | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'auth/boxed-password-reset',
        component: BoxedPasswordResetComponent,
        title: 'Boxed Password Reset | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'auth/boxed-signin',
        component: BoxedSigninComponent,
        title: 'Boxed Signin | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'auth/boxed-signup',
        component: BoxedSignupComponent,
        title: 'Boxed Signup | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'auth/cover-lockscreen',
        component: CoverLockscreenComponent,
        title: 'Cover Lockscreen | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'auth/cover-login',
        component: CoverLoginComponent,
        title: 'Cover Login | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'auth/cover-password-reset',
        component: CoverPasswordResetComponent,
        title: 'Cover Password Reset | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
    {
        path: 'auth/cover-register',
        component: CoverRegisterComponent,
        title: 'Cover Register | HAKASU - HatSolutions - Lets Create Successful Digital Projects Together',
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, MenuModule, IconModule],
    declarations: [
        BoxedLockscreenComponent,
        BoxedPasswordResetComponent,
        BoxedSigninComponent,
        BoxedSignupComponent,
        CoverLockscreenComponent,
        CoverLoginComponent,
        CoverPasswordResetComponent,
        CoverRegisterComponent,
    ],
})
export class AuthModule {}
