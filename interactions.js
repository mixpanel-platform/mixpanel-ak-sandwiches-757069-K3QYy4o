$(document).ready(function(){
//Mixpanel Dev Stuff
MP.api.setCredentials('6369a9ebce07770091b12273876b8887', '42d97c2a83b45f48eccea78273770f13')
});
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
            focusSelect();

        }
        else if (radio.visType.value === "bar") {
            clearSelect();
            $('#chooseBar').addClass('selectedImage');
            focusSelect();
        }
        else if (radio.visType.value === "pie") {
            clearSelect();
            $('#choosePie').addClass('selectedImage');
            focusSelect();
        }
        else if (radio.visType.value === "table") {
            clearSelect();
            $('#chooseTable').addClass('selectedImage');
            focusSelect();
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
            focusSelect();
        }
        else if (radio.analType.value === "total") {
            clearSelect();
            $('#chooseTotals').addClass('selectedImage');
            focusSelect();
        }
        else if (radio.analType.value === "average") {
            clearSelect();
            $('#chooseAverage').addClass('selectedImage');
            focusSelect();
        }
        else {
            console.log('did nothing... alariming!');
        }    
    }

function focusSelect()
{
    $('.selectedImage').css('opacity','1');
    $('img.toggleImage:not(.selectedImage)').css('opacity','.6');


}

$(document).ready(function(){
//Mixpanel UI elements

var eventSelect = $('#eventSelect').MPEventSelect();
var userEvent = $('#eventSelect').val()
var propSelect  = $('#propSelect').MPPropertySelect();
var dateSelect  = $('#dateSelect').MPDatepicker();


eventSelect.on('change', function(e, eventName) {
        propSelect.MPPropertySelect('setEvent', eventName);
        $("#by").show();

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



});






