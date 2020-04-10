// 입력창이 입력됐을 때만 활성화

$(function () {

    $("#join_pw").on('input', function () {
        if ($("join_pw").val() == '')
            // $("join_email").val() == '' &&
            // $("join_name").val() == '' &&
            // $("join_nickname").val() == '' &&
            $("#join_complete").attr("disabled", true);
        else
            $("#join_complete").attr("disabled", false);
    });
})

// 유효성 검사 ( 비밀번호 6자리 이상 )
// let pw_check = document.getElementById('join_pw');
// let join_complete = document.getElementById('join_complete');

// function chk(){
//     console.log(pw_check.value.length);
//     if(pw_check.value.length < 6){
//         alert("비밀번호는 6자리 이상 되어야합니다.");
//     } else {
//         console.log('지나갑니다.');
//     }
// };

// join_complete.addEventListener("click", chk);