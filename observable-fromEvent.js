//create an observabl FROM EVENTS

import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div #myDiv>Some text</div>
    `,
})
export class AppComponent implements AfterViewInit {
    @ViewChild('myDiv') myDiv: ElementRef;
    htmlElement;

    ngAfterViewInit() {
        this.htmlElement = this.myDiv.nativeElement;
        console.log(this.myDiv.nativeElement.innerHTML);
        const observable4 = fromEvent(htmlElement, "click");
        observable4.subscribe(console.log("was clicked!!"));
    }
}



