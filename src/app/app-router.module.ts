import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

/*const ROUTES = [
    { path: 'welcome',  component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];*/

@NgModule({
    imports: [
        /*RouterModule.forRoot(ROUTES), // can also defin constant var to keep clean */
        RouterModule.forRoot([ // doesnt matter the order of modules for routing. imported routes are appended first.
        { path: 'welcome',  component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent }

        /* in the event we change welcome to home.
        { path: 'home',  component: WelcomeComponent },
        { path: 'welcome', redirectTo: 'hone', pathMath: 'full' },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent }*/
        ]/*, { useHash: true } // hash based routing */
        , { enableTracing: true })
    ],
    declarations: [
        WelcomeComponent,
        PageNotFoundComponent
    ],
    exports: [ RouterModule ]
})

export class AppRouterModule {}