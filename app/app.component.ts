import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',    
    template: `
        <input type="text" [value]="food" (input)="foodInput($event)"/>
        <p>BBQ sauce is great with {{ food }}</p>
    `,
})
export class AppComponent { 
    food = 'Pizza';

    foodInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.food = target.value;
    }
}