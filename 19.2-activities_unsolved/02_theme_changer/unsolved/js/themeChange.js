$(".themeChange").on("click", function(){
    //we chose the themeChange class because it was isolated to the three buttons    
    if ( $(this).hasClass("regular") ){
        console.log("regular")
        $("#theme").attr("href","css/blank.css")
    }
    else if ($(this).hasClass("blue") ) {
        console.log("blue")
        $("#theme").attr("href", "css/blue.css")

    }else {
        console.log("dark")
        $("#theme").attr("href", "css/dark.css")
    }

})