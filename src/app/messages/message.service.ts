import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class MessageService {
    private messages: string[] = [];
    isDisplayed: boolean = false;

    constructor(private route: ActivatedRoute) {
        console.log(this.route);
    }

    addMessage(message: string): void {
        let currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    }
}
