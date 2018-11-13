window.onload = function(){

  var http = new XMLHttpRequest();

  http.onreadystatechange = function(){// this will log each time the ready state changes

    if(http.readyState == 4 && http.status == 200){ // this checks if the request state is complete and is loading ok.
  // console.log(JSON.parse(http.response));
    }
    };
  http.open("GET", "data/tweets.json", true); //this asks for where to get the data
  // true is syncranus and false is asyncranus
  http.send();// this goes out and grabs the data
  // console.log(http);


// Ready states
// 1 - request has been set up
//2 - request has been sent
//3 - request is in process
//4 - request is complete

};
//jquery method
// $.get("data/tweets.json", function(data){
//   console.log(data);
// });
// console.log("test");
