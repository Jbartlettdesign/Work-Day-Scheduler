var tasks = {
    one:"",
    two:"",
    three:"",
    four:"",
    five:"",
    six:"",
    seven:"",
    eight:"",
    nine:""
};
//time frame:9am-5pm(8hours total)
//var textBody = [];
var today = moment().format('dddd MMMM Do '); //friday april 2nd
hourCheck = true;
console.log(today);
function textToday(){
// finding currentDay by id and then change the currentDay id to today's date
$('#currentDay').text(today);
};
textToday();
// apply new class if task is near/over due date

function hoursInTheDay(){
var amPM = "am";
var currentHour = moment();
var currentHourRightNow = currentHour.format('h a');
console.log(currentHourRightNow);
console.log(currentHour);
var hours= 8;
var timeOfDay = 9;
for(var i = 0; i < hours +1; i ++){
    var stringFrm = "str" + i;
var secondContainer = $("<form>").addClass("secondaryContainer row justify-content-center");
secondContainer.attr("id", stringFrm);
var timerContainer = $("<div>").addClass("timer");
timerContainer.addClass("hour col-md-1");
var infoContainer = $("<textarea>").addClass("putYourInfoHere col-md-8");

var lockContainer = $("<button>").addClass("saveBtn lock col-md-1");
var lock = $("<span>lock</span>");
lock.addClass("material-icons");
lockContainer.append(lock);
var stringBtn = "btn" + i;
var stringText = "text" + i;
//infoContainer.text("hello");
//console.log(string);
infoContainer.addClass(stringText);
lockContainer.addClass(stringBtn);
lockContainer.attr("value", i);
infoContainer.attr("value", i);
infoContainer.attr("id", stringText);
//textBody[i].value = i;
//textBody = infoContainer;
//console.log(textBody[i].val);
//finding div with container of class container
$('.container').append(secondContainer);
$(secondContainer).append(timerContainer);
$(secondContainer).append(infoContainer);
$(secondContainer).append(lockContainer);
var setTime = moment().set('hour', timeOfDay);
setTimeTest = setTime.format('h a');
console.log(setTimeTest);
setTime = setTime.format();
timerContainer.text(setTimeTest);
/*we determined what the current time is here, currentHour is the moment()*/
if(currentHourRightNow === setTimeTest && hourCheck){
    timerContainer.addClass("present");
    infoContainer.addClass("present");
    console.log("present");
    console.log(setTimeTest);
    console.log(currentHourRightNow);
    hourCheck = false;
    }
else if(moment(currentHour).isAfter(setTime)){
    timerContainer.addClass("past");
    infoContainer.addClass("past");
    console.log("past");
    //console.log(currentHour);
}
else if(moment(currentHour).isBefore(setTime)){
    timerContainer.addClass("future");
    infoContainer.addClass("future");
    console.log("future");
    console.log(currentHour);
    console.log(setTime);}


else{
    console.log("other")
}
if(timeOfDay === 12){
    timeOfDay = 13;
    amPM = "pm";
}
else{
    timeOfDay ++;

};
}
}
hoursInTheDay();
 

var saveTasks = function(input) {
    localStorage.setItem("tasks", JSON.stringify(input));
};



var former0 = document.querySelector("#str0");
    former0.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text0").value;
    tasks.one = tempValue;
    saveTasks(tasks)});
    //////////////1*/
    
    var former1 = document.querySelector("#str1");
    former1.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text1").value;
    tasks.two = tempValue;
    saveTasks(tasks)});
//////////////////////2*/
var former2 = document.querySelector("#str2");
former2.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text2").value;
    tasks.three = tempValue;
    saveTasks(tasks);
    });
/////////////////////
var former3 = document.querySelector("#str3");
former3.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text3").value;
    tasks.four = tempValue;
    saveTasks(tasks);
    });
/////////////////////
var former4 = document.querySelector("#str4");
former4.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text4").value;
    tasks.five = tempValue;
    saveTasks(tasks);
    });
///////////////////
var former5 = document.querySelector("#str5");
former5.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text5").value;
    tasks.six = tempValue;
    saveTasks(tasks);
    });
///////////////////
var former6 = document.querySelector("#str6");
former6.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text6").value;
    tasks.seven = tempValue;
    saveTasks(tasks);
    });
//////////////
var former7 = document.querySelector("#str7");
former7.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text7").value;
    tasks.eight = tempValue;
    saveTasks(tasks);
    });
//////////////////
var former8 = document.querySelector("#str8");
former8.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text8").value;
    tasks.nine = tempValue;
    saveTasks(tasks);
    });
    
function loadTasks() {
    
    newTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(newTasks);
    if(newTasks !=null){
        tasks = newTasks;
    var tempValue = document.getElementById("text0");
    tempValue.value = newTasks.one;

    var tempValue = document.getElementById("text1");
    tempValue.value = newTasks.two;

    var tempValue = document.getElementById("text2");
    tempValue.value = newTasks.three;

    var tempValue = document.getElementById("text3");
    tempValue.value = newTasks.four;

    var tempValue = document.getElementById("text4");
    tempValue.value = newTasks.five;

    var tempValue = document.getElementById("text5");
    tempValue.value = newTasks.six;

    var tempValue = document.getElementById("text6");
    tempValue.value = newTasks.seven;

    var tempValue = document.getElementById("text7");
    tempValue.value = newTasks.eight;

    var tempValue = document.getElementById("text8");
    tempValue.value = newTasks.nine;
}};

loadTasks();