
//backend query this object
var queryConfig = {};

//backed push code to this object
var queryResult = {
    sampleQuery : "",
    pasteCode : "",
    previewHTML : "",
    pushChanges : function(){pasteCode(); writeHTML();}

};


//front end for chart selector
function toggleImage(containerElem) {

    	
        //toggle the checkbox value
        var radio = containerElem.getElementsByClassName("radioButton");
        // console.log(radio)
        // div()
        // console.log(radio.visType.value)
        queryConfig.viz = radio.visType.value
        
        function clearSelect()
        {
            $('.visuals img').removeClass('selectedImage');
        }

        //update the image styles
        var image = $('.analysis .toggleImage');
        if (radio.visType.value === "line") {
            clearSelect();
            $('#chooseLine').addClass('selectedImage');
        }
        else if (radio.visType.value === "bar") {
            clearSelect();
            $('#chooseBar').addClass('selectedImage');
        }
        else if (radio.visType.value === "pie") {
            clearSelect();
            $('#choosePie').addClass('selectedImage');
        }
        else if (radio.visType.value === "table") {
            clearSelect();
            $('#chooseTable').addClass('selectedImage');
        }
        else {
            console.log('did nothing');
        }    
    }

//front end for analysis type
function toggleImage2(containerElem) {

        
        //toggle the checkbox value
        var radio = containerElem.getElementsByClassName("radioButton");
        console.log(radio)
        // div()
        console.log(radio.analType.value)
        queryConfig.anal = radio.analType.value
        
        function clearSelect()
        {
            $('.analysis img').removeClass('selectedImage');
        }

        //update the image styles
        var image = $('.analysis .toggleImage');
        if (radio.analType.value === "unique") {
            clearSelect();
            $('#chooseUniques').addClass('selectedImage');
        }
        else if (radio.analType.value === "total") {
            clearSelect();
            $('#chooseTotals').addClass('selectedImage');
        }
        else if (radio.analType.value === "average") {
            clearSelect();
            $('#chooseAverage').addClass('selectedImage');
        }
        else {
            console.log('did nothing');
        }    
    }

//the date picker
$(document).ready(function() {
    var dateSelector = $('<div></div>').appendTo('body').MPDatepicker();    // Create a date picker
    dateSelector.on('change', function(e, dates) {                          // Do something when the dates are changed
        console.log('From: ' + dates.from + '\nTo: ' + dates.to);
    });
});


function getDetails()
{
    queryConfig.chartName = $('#myChartName').val();



}




function pasteCode()
{
     $('#codeResult textarea').val(queryResult.pasteCode); 
     $('#sampleQuery input').val(queryResult.sampleQuery)

}

function writeHTML()
{

     $('#preview').html(queryResult.previewHTML + '<br/><br/>');

}


//ak's silly helper classes

function div()
{
    console.log('----------');
}

