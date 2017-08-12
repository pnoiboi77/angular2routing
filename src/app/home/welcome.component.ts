import { Component } from '@angular/core';

@Component({
    /*selector: 'app-home', // no longer need as we include this through routing*/
    templateUrl: './app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
