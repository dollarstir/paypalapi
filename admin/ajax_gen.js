$(document).ready(function () {

    function resp(response) {

        $("#respo").html(response);
        $("#mess").fadeOut(15000);
        
    }


    $(".subpro").submit(function (e) {
        e.preventDefault();
        
        var optionsc = {
            url: 'process.php?dollar=prodat',
            type: 'post',
            data: new FormData(this),
            cache: false,
            processData: false,
            contentType: false,
         //    beforeSend: prog,
            success: resp,
         }
 
        $.ajax(optionsc);
 
    });


    $(".editprod").submit(function (e) {
        e.preventDefault();
        
        var optionsc = {
            url: 'process.php?dollar=editprod',
            type: 'post',
            data: new FormData(this),
            cache: false,
            processData: false,
            contentType: false,
         //    beforeSend: prog,
            success: resp,
         }
 
        $.ajax(optionsc);
 
    });

    



    


    



    
    
    
})
