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
    $("#tbl").hide();

    $.validator.addMethod("validateMobileNo", function (value) {return /^9{1,9}\d{9}$/.test(value);
});
$.validator.addMethod("validateFullName", function (value) {return /([A-Z][a-z]{3,} )([A-Z][a-z]{3,} )?([A-Z][a-z]{2,})/.test(value);
});
        $("#RegFormVali").validate({
            rules:{
                fullname:{
                    required:true,
                    validateFullName:true
                },
                phone:{
                    required:true,
                    maxlength:10,
                    minlength:10,
                    number:true,
                    validateMobileNo:true
                },
                mail:{
                    required:true,
                    email:true  
                },
                pass:{
                    required:true,
                    maxlength:10,
                    minlength:6,
                }
            },
            messages:{
                fullname:{
                    required:"Full name is required",
                    validateFullName:"Enter valid Full Name"
                },
                phone:{
                    required:"Phone no is required",
                    number:"Only number valid",
                    maxlength:"Enter max 10 digit",
                    minlength:"Enter min 10 digit",
                    validateMobileNo:"Phone no starts with 9"

                },
                mail:{
                    required:"Email is required",
                    email:"Enter valid email"
                },
                pass:{
                    required:"Password is required",
                    maxlength:"Enter max 10 digit",
                    minlength:"Enter min 6 digit",
                }
            }
        });


        $("#RegValSubmit").click(function(){
            debugger;
            if($("#RegFormVali").valid()){
               var fullname = $("#fullname").val();
               var phoneno = $("#phone").val();
               var email = $("#mail").val();
               $("#i").html(1);
               $("#f").html(fullname);
               $("#p").html(phoneno);
               $("#e").html(email);
               $("#tbl").show();
               $("#fullname").val("");
               $("#phone").val("");
               $("#mail").val("");
               $("#pass").val("");
               $("#AccModal").modal("toggle");
            }else{
                return false;
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








