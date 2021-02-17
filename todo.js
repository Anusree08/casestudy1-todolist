function ajax(){
    
    
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            
            var output=" ";
            for(var i=0; i<response.length;i++){
                
                if(response[i].completed==true){
                    output+= '<br>'+' <input type="checkbox" name="" id="myCheck" disabled>'+response[i].title.fontcolor("grey")+'<br>';
                }
                else{
                    output+= '<br>'+' <input type="checkbox" name="myCheck" id="myCheck" onclick= "return countCheck()">'+response[i].title+'<br>';
                }
            }
            document.getElementById("demo").innerHTML=output;
            
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
ajax();

function countCheck(){
    var a=document.getElementsByName("myCheck");
    var n=0;
    var count;
    for(count=0;count<a.length;count++) {
        if(a[count].checked==true){
            n=n+1;
        }
        console.log(n);
    }  
    if(n>5){
        alert("Congrats. 5 Tasks have been already Successfully Completed");
        return false;
    }                      
}

// function countCheck(){
//     return new Promise(function(resolve,reject){
//         let n=0;
// let a=document.getElementsByName("myCheck");
// let count;
// for(count=0;count<a.length;count++) {
//     if(a[count].checked==true){
//         n++;
        
//     }
//     console.log(n);
//    }
   
//         if(n==5){
//             resolve("yay");
//         }
//         else if(n>5)  {
//             reject("noo");
            
//         }
        
        
// });
// }

// countCheck()
// .then(function(s){
//     console.log(s);
// })
// .catch(function(e){
//     console.log(e);
// })

// function final(){
    
//    countCheck();
// }

