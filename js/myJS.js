function ab(){
    alert("Hello i am clicked.2");
}

document.getElementById("ds").onmouseover = xyz;

function xyz(){
    var text = "Makawanpur, Nepal.";
    document.getElementById("dt").innerHTML=text;
}



$(document).ready(function(){
    $("#loading").fadeOut(2000,function(){
        $(".content").fadeIn(1000);
    });


        $("#RegFormVali").validate({
            rules:{
                fullname:{
                    required:true,
                },
                phone:{
                    required:true  
                },
                mail:{
                    required:true  
                },
                pass:{
                    required:true  
                }
            },
            messages:{
                fullname:{
                    required:"Full name is required"
                },
            }
        });



    $(".btn2").keydown(function(){
           var i = $(this).val();
           if(event.keyCode==77){
               $(this).hide();
           }
    });
    $("#btn1").click(function(){    
        $(this).hide();
     });
     $(".hidePTag").click(function(){
         debugger;
        $(".hideMe").fadeOut(1000);
    });
    $("#fName").keyup(function(){
        var data2= $(this).val();
        
        if(data2.includes(1)==true ||data2.includes(2)==true ||
        data2.includes(3)==true||data2.includes(4)==true||
        data2.includes(5)==true||data2.includes(6)==true||
        data2.includes(7)==true||data2.includes(8)==true||
        data2.includes(9)==true||data2.includes(0)==true)            
        {
             var a= data2.replace(data2,'');
             $(this).val(a);
        }
    });







});








