// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

    function makeGrid(a,b) {

            //variable declarations
            var height, width, color;  
   
            //variable assignment
            height = $('#inputHeight').val(); 
            width = $('#inputWeight').val();
            
            //to make row element and loop through
            var a = ""; 
                for(var x = 1 ; x <= height ; x++){
            
            //to make column element and loop through
            var b = "";  
                for(var y = 1 ; y <= width ; y++){
            b += "<td></td>"; 
        }
            
            //to build the row for the table            
            a = "<tr>"+ b +"</tr>"; 
            //to add the table row element to the table element
        $('#pixelCanvas').append(a); 
        }
            }

            //to prevent the default behaviour of the submit button when clicked
        $('#sizePicker').submit('click',function (evt){
            event.preventDefault();
            
            //to clear the table on every click of the submit button
        $('#pixelCanvas').empty();
        
             //to call the makeGrid function on each click of the button and builds the grid
            makeGrid(); 
        });
            //to add color 
            $('table').on('click','td',function(){
                           color = $('#colorPicker').val();
                $(this).css('backgroundColor',color);
        
    });