window.onload = () => {

}

$.getJSON( "https://bing.biturl.top/?mkt=random&index=random", function( data ) {
    console.log(data)
    $.each( data, function( key, val ) {
        if(key === "url"){
            document.body.style.backgroundImage = "url('"+ val +"')";
        }
    });
});