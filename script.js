    var result={}
    $(document).ready(function () {
    $("#mybtn").click(function () {
     if(!localStorage.cur){
          $.ajax({
            // url:"https://api.fixer.io/latest",
            url:"http://192.168.150.12",
            type:"GET",
            data:$("#myform").serialize(),
            success: function(response){

                $( "#mydiv" ).text(response.eur);
                console.log(response)
                localStorage.cur=response.eur
                result=response;
            }
        })
     }
     else{
        $( "#mydiv" ).text(localStorage.cur);

     }

      

    })

})