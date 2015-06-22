$('#box1').css('background-color','green');

$('#para1').css({'font-weight':'700','font-size':'30px'});

$('.box2').addClass('spin');

$('#button1').click(function() {
	alert('Yo sup!')
});

$('#box3').mouseover(function(){
    $("#box3").css("background-color", "green");
});

$("#input1").keyup(function(){
    console.log($('#input1').val());
});

$('#box4').animate({'top':'+=150px','left':'+=400px'},2000);

//2000 refers to the 2 second delay!