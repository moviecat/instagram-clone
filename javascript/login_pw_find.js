$(function(){
    $("#pw_find").on('input', function(){
        if($("pw_find").val()=='')
        $("#pw_send").attr("disabled", true);
        else
            $("#pw_send").attr("disabled", false);
    });
})