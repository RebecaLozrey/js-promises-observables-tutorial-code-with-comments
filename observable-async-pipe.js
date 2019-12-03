// async pipe let us pass an observable to the template
// we dont have to subscribe from the ts file
// async subscribes whenthe component is created
// async unsuscribes when the component is destroyed
product$ | async

*ngIf="products$ | async as products"
*ngFor="let product of products"