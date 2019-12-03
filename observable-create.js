
// an observable is like a conveyor belt transporting apples
// an observer waits for each apple to arrive
// the conveyor belt needs to be started and stoped

const myObservable = new Observable(  (observer) => {
    observer.next('first apple');
    observer.next('second apple');
    obersver.error('observable error'); // and then automatically unsubscribes the observer
    observer.complete(); // automatically unsubscribes the observer
});

const myObserver = {
    next: (element) => {console.log(element)}, //optional parameter: do something with each element of the stream
    error: (error) => {console.log(error)}, //optional parameter: do something if it fails
    complete: () => {console.log('completed')} //optional parameter: do something when the stream finishes
}

const mySubscription = myObservable.subscribe(myObserver); // start the stream with the subscribe method
// some operators unsuscribe from the observable after competion
// unsubscribe method stops the stream of elements
mySubscription.unsubscribe();