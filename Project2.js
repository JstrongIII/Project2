function apisearch(){
    $.ajax({
        type: 'GET',
        dataType:"jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=keyValue&cx=cxValue&q=" + $("#querybox").val(),
        success: function (result) {
            console.log('data: ', result);
            var searchOutput = '';
            var len = result.items.length;
            for (i = 0; i < len; i++) {
                searchOutput += `<p><a href="${result.items[i].title}">${result.items[i].link}</a>: ${result.items[i].snippet}</p>`;
            }
    
            $("#output").html(searchOutput);
    
        }
    });   
}

// DO NOT CHANGE CODE ABOVE EXCEPT LINE 5 AS STATED IN THE ASSIGNMENT. YOU MAY COPY THE ABOVE FUNCTION FOR QUESTION (4) OF JS.

// START TYPING BELOW


function apiSearch() {     
    $.ajax({            
        type:'GET',        
        dataType:"jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyAAtOJoMWp5-oA3FgJa3Skv9IE8dBdNAS4&cx=338497c2632274066&q=" + $("#query").val(),
        success: function(result){
            console.log('data:', result);
            var searchOutput = '';
            var len = result.items.length;
            for (var i = 0;i < len;i++){                     
                searchOutput += `<p><a href="${result.items[i].title}">${result.items[i].link}</a>:${result.items[i].snippet}</p>`;
            }//End for               
            $("#searchResults").html(searchOutput);
        }// End Success
    });// End Ajax
}//End Api Search function

function apiSearchLucky(query){                 
    $.ajax({                       
        type:'GET',
        dataType: "jsonp",                       
        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyAAtOJoMWp5-oA3FgJa3Skv9IE8dBdNAS4&cx=338497c2632274066&q=" + query,
        success:
        function(result){                       
            console.log('data:', result);
            if (result.items && result.items.length > 0) {                               
                var firstResult = result.items[0];
                window.open(firstResult.link, "_blank");
            }//End If
            else{                           
                alert("No results found for the given query");
            }//End Else
        },// End Function                  
        error: function(){
            alert("Error occurred while fetching results");
        }//End Error
    });//End Ajax
}//End apiSearchLucky function 
       
$(document).ready(function(){
    $("#searchButton").click(function(event){
        event.preventDefault();               
        apiSearch();
    });//End Click Event
});//End Ready

$("#changeColorButton").click(function(){
     $("body").css("background-color", getRandomColor());
});//End Click
 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }//End For
    return
        color;
}//End getRandomColor function

$("#toggleFadeButton").click(function(){
    $("#searchForm, #searchResults").fadeToggle();
});//End ToggleFadeButtion

$("#luckyButton").click(function(){
    var query = $("#query").val();
    apiSearchLucky(query);
});//End LuckyButton
