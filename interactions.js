function div()
{
    console.log('----------');
}


var queryConfig = {};

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