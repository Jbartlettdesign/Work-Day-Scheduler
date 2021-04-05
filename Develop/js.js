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

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
};

var saveTasks = function(input) {
    localStorage.setItem("tasks", JSON.stringify(input));
};



var former = document.querySelector("#str0");
    former.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text0").value;
    tasks.one = tempValue;
    saveTasks(tasks);
    console.log(tasks)});
    //////////////1*/
    
    var former = document.querySelector("#str1");
    former.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text1").value;
    console.log(tasks);
    saveTasks(tempValue)});
//////////////////////2*/
var former = document.querySelector("#str2");
former.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text2").value;
    saveTasks(tasks);
console.log(tempValue)});
/////////////////////
var former = document.querySelector("#str3");
former.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text3").value;
    saveTasks(tasks);
    console.log(tempValue)});
/////////////////////
var former = document.querySelector("#str4");
former.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text4").value;
    saveTasks(tasks);
    console.log(tempValue)});
///////////////////
var former = document.querySelector("#str5");
former.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text5").value;
    saveTasks(tasks);
    console.log(tempValue)});
///////////////////
var former = document.querySelector("#str6");
former.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text6").value;
    saveTasks(tasks);
    console.log(tempValue)});
//////////////
var former = document.querySelector("#str7");
former.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text7").value;
    saveTasks(tasks);
    console.log(tempValue)});
//////////////////
var former = document.querySelector("#str8");
former.addEventListener('submit', function (e){
    e.preventDefault();
    var tempValue = document.getElementById("text8").value;
    saveTasks(tasks);
    console.log(tempValue)});
