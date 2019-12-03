// catch and replace
of(2,4,6).pipe(
catchError(
    error => {
        console.error(error); // or log to server
        return from([
            {name: defaultProduct1},
            {name: defaultProduct2},
            {name: defaultProduct3}

        ]) 
    }
),
).subscribe(observer); // the observer gets the default values and ignores de error

// reference to error handler
catchError(this.handerReference)// takes a reference to a handler function

// catch and rethrow

of(2,4,6).pipe(
    catchError(
        error => {
            console.error(error); // or log to server
            return EMPTY; // rethrow the error stop the data stream 
        }
    ),
    ).subscribe(observer); // observer gets an empty obaservable