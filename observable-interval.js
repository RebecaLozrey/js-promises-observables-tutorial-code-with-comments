// sends a number every 1000 ms
const observableOfInterval = interva(1000).suscribe(number => console.log(number));