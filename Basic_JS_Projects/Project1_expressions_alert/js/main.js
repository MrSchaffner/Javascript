
    var message = "\"Hello Universe!\""
    +" That's weird";

    var multiple1 = "1", multiple2="2";
    var expression = 3+5;
    var concatenate = multiple1+multiple2;
    
    //alert(message);
    /* or */
    //window.alert(message);
    /* or */
    document.write(concatenate);

    // a function that triggers when a button is pressed.
    function change(){
        document.getElementById("button1").innerHTML=message;
        var string1 = document.getElementById("item1").innerHTML;
        document.getElementById("item1").innerHTML=string1.fontcolor("blue");
    }