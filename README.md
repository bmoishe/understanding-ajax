<b><u>AJAX requests</u></b>

This is an example of how to pull through API's asynchronously.

<b>Ready states</b>

1. request has been set up


2. request has been sent


3. request is in process


4. request is complete

<b>Vanilla JS method</b>
```JavaScript
window.onload = function(){

  var http = new XMLHttpRequest();

  http.onreadystatechange = function(){// a console log will log each time the ready state changes

    if(http.readyState == 4 && http.status == 200){ // this checks if the request state is complete and is loading ok.
  // console.log(JSON.parse(http.response));
    }
    };
  http.open("GET", "data/tweets.json", true); //this asks for where to get the data
  // true is synchronous and false is asynchronous
  http.send();// this goes out and grabs the data
  };
```


<b>Jquery method</b>

```JavaScript


 $.get("data/tweets.json", function(data){
   console.log(data);
 });
 console.log("test");
```
