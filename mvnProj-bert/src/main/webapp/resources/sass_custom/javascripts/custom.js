//submit-btn
var $mySubmitBtn = $("#submit-btn"); //return the jquery wrapped object
var mySubmitBtn = document.getElementById("submit-btn");//return the element
var $divs = $("div");
var PostCode = document.getElementById("postCode");
var PostCodeCon = $("#errorMsg");
var validPostCode = 6000;
var $radiosYes = $("#yes");
var $radiosNo = $("#no");
var isTrue = false;

//Web Worker Task
var mainDiv = document.createElement("div");
function massiveTask(){
    for(var i=0;i<1000000;i++){
        $(mainDiv).append(document.createElement("div"));
    }
}
//massiveTask();
console.log("ok");

var w;
/*
function startWorker() {
    //massiveTask();
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("javascripts/demo_workers.js");
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}
function stopWorker() {
    w.terminate();
    w = undefined;
}

//webWorker();
function clickRadio() {
    isTrue = true;
    return isTrue;
}
*/
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("ajaxContent").innerHTML = xhttp.responseText;
            //console.log(xhttp.responseText);
        }
    };
    xhttp.open("GET", "json/object.json", true);
    xhttp.send();
}
function loadDocAjaxJquery() {
    $.ajax(
        {"url": "json/object.json",dataType:"json"}
    ).success(function (responseData,status,response) {//ready state status is 200
        var ok = responseData.employees["eLener@gmail.com"];//this is an json object parse by browser
        console.log(ok);
        document.getElementById("ajaxContent").innerHTML = "Ajax yes!";
    }).fail(function (a,b,c) {
        //debugger;
        document.getElementById("ajaxContent").innerHTML = "Ajax no!";
    })
}
if (typeof localStorage.clickcount === "undefined") {
    $mySubmitBtn.css({"display":"block"});
    //PostCode.value = localStorage.getItem(PostCode.name);
    document.getElementById("errorMsg").innerHTML = "Thank you for submitting";
}
function checkLocalStorage_(){
    if (typeof localStorage.clickcount !== "undefined") {
            PostCodeCon.css({"opacity": "1", "transition": "opacity 300ms ease"});
            document.getElementById("errorMsg").innerHTML = "Thank you for submitting";
            $mySubmitBtn.css({"display":"none"});
    }
}
console.log(localStorage);
//checkLocalStorage();
$mySubmitBtn.click(function (event) {

    event.preventDefault();//change the default behavior
    //localStorage.clickcount = 1;
    //checkLocalStorage();
    //localStorage.removeItem(PostCode.name);
    //localStorage.setItem(PostCode.name, PostCode.value);
        // Retrieve

    //event.stopPropagation();// stop the children function of a parent event
    //loadDocAjaxJquery();
    // Check browser support
    /*
    $regex = "\a";
    PostCodeCon.css({"opacity": "1", "transition": "opacity 300ms ease"});
    if (PostCode.value == '' && isTrue == true) {
        document.getElementById("errorMsg").innerHTML = 'Please enter your post code!';
    } else {
        if (isNaN(PostCode.value)) {
            document.getElementById("errorMsg").innerHTML = 'Please enter a valid post code number';
        }
        if (!isNaN(PostCode.value)) {
            if (PostCode.value == validPostCode) {
                document.getElementById("errorMsg").innerHTML = 'valid';
                //loadDoc();

            } else if (PostCode.value != validPostCode) {
                document.getElementById("errorMsg").innerHTML = 'invalid post code';
            }
        }
    }*/
    /**/
    //regular expression = used for validation
    //$mySubmitBtn.css("backgroundColor","blue");//jquery
    //$divs.css("backgroundColor","blue");
    //$divs.css("color","red");
    //$divs.css({"backgroundColor":"blue","color":"red"});
    //mySubmitBtn.animationName
    /*
     var divs = document.getElementsByTagName("div");//all div elements are selected - returns an array
     for(var x=0;x<=divs.length;x++){
     divs[x].style.backgroundColor="blue";
     }
     setTimeout(function(){
     alert('Clicked! Hellow world again!');
     },1000); javascript */
});
//button displaying alert and needs to submit -
/*
 Javascripts library - JQuery
 shortend the syntax
 include an external script
 JQUERY
 AJAX
 Research this - create a responsive carousel

 post-code must valid and not empty

 */