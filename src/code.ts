import { Observable, fromEvent, observable } from 'rxjs';
import * as data from '../server/data';
var counter = 0;

var observable1 = Observable.create((observer: any)=>{
    data.allBooks.forEach(book=> { observer.next(book.title)});
    observer.complete('process complete');
    //observer.complete('process complete');
    //observer.next(data.allBooks.map(x=>x.author))
});

var observable2 = new Observable((observer: any)=>{
    observer.next('hello')
});

var dateObserver = Observable.create((observer: any)=>{
    counter = 0;
    var intval = setInterval(()=>{
        observer.next(new Date());
        counter++;
        if(counter>5)
        clearInterval(intval);
    }, 1000)
    
})
var interval = (observer: any)=> setInterval(()=>{
    observer.next(new Date());
    counter++;
}, 1000)

dateObserver.subscribe((x: any)=>{ addItem(x)})

setTimeout(()=>{dateObserver.unsubscribe()}, 10000)

function addItem(val: any){
    var node = document.createElement('li');
    node.className = 'col-md-4';
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}
function addDate(val: any){
    var node = document.createElement('li');
    node.className = 'col-md-4';
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}

// let button = document.getElementById('btnButton');
// fromEvent(button, 'click').subscribe(
//     event=>{addItem(event)}
// )
//designcourse tutorial