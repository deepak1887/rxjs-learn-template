import { Subject, Observable } from 'rxjs';
import * as data from '../server/data';

var subject = new Subject();
data.allBooks.forEach(book=>{ 
    subject.next(book.title);
})

var observer1 = Observable.create((observer: any)=>{
    observer.next('Hello Deepak !!')
})

// subject.subscribe(
//     data => addItem('observer 1: ' + data),
//     error => addItem(error),
//     ()=> addItem('observer 1 complete')
// )
// subject.next('First thing from subject')

// var observer2 = subject.subscribe(
//     data=> addItem('observer 2: ' + data)
// )

// subject.next('Second thing from subject')
// subject.next('Third thing from subject')


function addItem(val: any) {
    var node = document.createElement("li");
    node.className = "col-md-4";
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
function addDate(val: any) {
    var node = document.createElement("li");
    node.className = "col-md-4";
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

// let button = document.getElementById('btnButton');
// fromEvent(button, 'click').subscribe(
//     event=>{addItem(event)}
// )
//designcourse tutorial
