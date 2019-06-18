import { Observable } from 'rxjs';


var observable = Observable.create((observer: any)=>{
    try{
        observer.next('Hey guys !!');
        observer.next('Hey next guys !!');
        let interval = 0;
        var intervalFunction = setInterval(()=>{
            observer.next(`interval ${interval} in second`);
            interval+= 2;
            // if(interval > 10)
            // clearInterval(intervalFunction);
        }, 2000);
        //intervalFunction;

    }
    catch(err){
        observer.error(err)
    }
});

var observer = observable.subscribe((x: any)=>{ addItem(x)});
setTimeout(() => {
    observer.unsubscribe();
}, 6500);

function addItem(val: any){
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}
//designcourse tutorial