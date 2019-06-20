import { Observable, fromEvent, observable } from "rxjs";
import * as data from "../server/data";
var counter = 0;

var observable1 = Observable.create((observer: any) => {
    try
    {
        observer.next("Hey Guys!!");
        observer.next("How are you guys");
        setInterval(() => {
            observer.next("observer next");
        }, 2000);
    } catch (err)
    {
        observer.error(err);
    }
});

var observer1 = observable1.subscribe(
    (x: any) => {
        addItem(x);
    },
    (error: any) => {
        addItem(error);
    },
    () => {
        addItem("complete");
    }
);
var observer2 = observable1.subscribe(
    (x: any) => {
        addItem(x);
    }
);

observer1.add(observer2);
setTimeout(() => {
    observer1.unsubscribe();
}, 6001);

var observable2 = Observable.create((observer: any) => {
    data.allBooks.forEach(book => {
        observer.next(book.title);
    });
    observer.complete("process complete");
});

//observable2.subscribe((x: any)=>{ addItem(x)});

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
