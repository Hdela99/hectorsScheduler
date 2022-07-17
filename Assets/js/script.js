//these two are jQuery objects. ---
var containerEl = $(`.container`);
var currentDayEl = $(`#currentDay`);
var headerEl = $(`:Header`);


let timesArray = [ "9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];


//need a function to add todays date/time
function updateHeader(){
    //show current day and time
     currentDayEl.text(moment().format('LLLL'));
}

$(document).ready(function(){
    for(var i = 0; i<timesArray.length; i++){
        var rowEl = $('<Form>');
        rowEl.attr("id", timesArray[i]);
        //creation of Text Area
        var textAreaEl = $(`<textarea>`);
        textAreaEl.attr("id",timesArray[i]);
        textAreaEl.text("Default");
        //add class for css properties along with text and ID
        rowEl.addClass('row').attr("id",timesArray[i]).text(timesArray[i]);
       //add text area to the row
         rowEl.append(textAreaEl);

         //creation of buttons.
         var saveBtnEl = $(`<button>`);
         //give em a class
         saveBtnEl.addClass("saveBtn");
         //give it some text
         saveBtnEl.text("Save");
         //add it to Row. 
         rowEl.append(saveBtnEl);
         //physically add rowEl to container to show in HTMl. 
        containerEl.append(rowEl);
        console.log(timesArray[i])

    }
})


//function to create the "save" button on 3rd column on every row. 

//function to dynamically update colors of column 2 in every row. 

//call earlier functions to show up on page. 
updateHeader();
// layout();
