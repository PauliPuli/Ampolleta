$(document).ready(function(){
    $("#on").click(function(){
        $("#bulboff").attr('src', './assets/img/pic_bulbon.gif');

    })
    $("#off").click(function(){
        $("#bulboff").attr('src', './assets/img/pic_bulboff.gif');

    })
    // $("#off").click(function(){
    //     $("#bulbon").hide();
    //     $("bulboff").show();
    // })
})