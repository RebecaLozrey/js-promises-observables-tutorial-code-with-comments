of(2,3,4)
.pipe(
    map(n => n*2), // takes an observable and transforms it into an observable with the same number of elements
    tap(n => console.log(n)), // operation that does not affect the stream used for debugging
    take(2)
)
.subscribe()