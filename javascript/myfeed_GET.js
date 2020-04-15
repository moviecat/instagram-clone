function myFeed() {
    console.log('마이 피드 조회');

    $.ajax({
        type: "GET",

        url: "블라블라", // 해당 request를 보낼 주소

        headers: {
            Authorization: localStorage.getItem("token"),
        },
        dataType: "json",

        success: function (response) {
            console.log("통신 성공");
            console.log(response);
            // 1.프로필 사진 이미지 변수
            console.log(response.data.변수);

            // 2.아이디값
            console.log(response.data.변수);

            //3. 소개글
            console.log(response.data.변수);

            //4.피드 게시물 이미지 
            console.log(response.data.변수);

            //쿼리 잡아오기
            //1. 프로필 사진 이미지
            let img_profile = document.getElementById("img_profile");
            //2. 아이디값
            let mypro_id = document.querySelector(".mypro_id") //
            //3. 소개글
            let mypro_info = document.querySelector(".mypro_info");
            //피드 게시물 이미지 
            //4.전체 div
            let feed_mine = document.querySelector(".feed_mine");
            //5. 이미지 a 태그만 선택
            let myfeed = document.querySelector(".myfeed");

            console.log(img_profile);
            console.log(mypro_id);
            console.log(mypro_info);
            console.log(feed_mine);
            console.log(myfeed);

            // 1.프사 바꾸기
            img_profile.src = response.date.변수명;
            // 2. 아이디명 바꾸기
            mypro_id.innerText = response.data.변수명;
            // 3. 설명글 바꾸기
            mypro_info.innerText = response.data.변수명;
            // 4.마이피드 바꾸기...
            myfeed.style.backgound = ("url: \" " + response.data.변수명 + " \" ");

        },
        error: function (response) {
            console.log("통신에 실패했습니다.");
            console.log(response);
        }
    })
}

myFeed();