 //Goes to the top page when hit refresh.
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }

        //button select functions
        $(".btn-group > .btn").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });