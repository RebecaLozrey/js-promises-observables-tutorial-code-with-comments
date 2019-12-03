of(2,3,4)
.pipe(
    map(n => n*2), // takes an observable and transforms it into an observable with the same number of elements
    tap(n => console.log(n)), // operation that does not affect the stream used for debugging
                             // tap can be used to change the state of the application like w a counter
    take(2) // this will limit the stream to the first two items
)
.subscribe()