$(document).ready(function(){
    
    $('h1').click(function(){
        alert('hello')
    });
    $('h2').click(function(){
        alert('Rabin')
    });
    $('.hide').click(function(){
        $('p').hide();
    });
    $('.show').click(function(){
        $('p').show();
    });
    $("button.one").click(function(){
        $("p.one").addClass("red");
    });
    $("button.append-button").click(function(){
        $("p.append-button").append("<p>this is a new paragraph.</p>");
    });

});