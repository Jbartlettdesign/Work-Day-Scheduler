//time frame:9am-5pm(8hours total)
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
var secondContainer = $("<div>").addClass("secondaryContainer row justify-content-center");

var timerContainer = $("<div>").addClass("timer");
timerContainer.addClass("hour col-md-1");
var infoContainer = $("<textarea>").addClass("putYourInfoHere col-md-8");
var lockContainer = $("<button>").addClass("saveBtn lock col-md-1");
lockContainer.attr("value", i);
infoContainer.attr("value", i);
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
    console.log(currentHour);
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
$('.saveBtn').click(function() {
    var val = this.value;
    // get form values
    
    console.log(val);
    //for(var i = 0; i < 9; i++){
        
       var found = $('infoContainer').value;
        if(fond){
            console.log(found);
        }
    
});
