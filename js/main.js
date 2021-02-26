// VARIABLES
var elem1 = document.getElementById("bar1"); //html 90%
var elem2 = document.getElementById("bar2"); //css 90%
var elem3 = document.getElementById("bar3"); //sass 70%
var elem4 = document.getElementById("bar4"); // javascript 80%
var elem5 = document.getElementById("bar5"); // react 60%
var elem6 = document.getElementById("bar6"); //php 70%
var elem7 = document.getElementById("bar7"); //.net 60%
var elem8 = document.getElementById("bar8"); //mysql 70%
var elem9 = document.getElementById("bar9"); //mongodb 60%
var elem10 = document.getElementById("bar10"); //flutter 80%
var elem11 = document.getElementById("bar11"); //unity 70%
var elem12 = document.getElementById("bar12"); //java 90%

var width = 10;
var id1, id2, id3, id4;

function displayProjects(event, btn) {

    document.getElementsByClassName("btn-tab")[0].classList.remove("btn-all-active");
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabBtn = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabBtn.length; i++) {

        tabBtn[i].className = tabBtn[i].className.replace(" btn-active", "");
    }

    document.getElementById(btn).style.display = "flex";
    event.currentTarget.className += " btn-active";

}


// animations
$('.js--wp-1').waypoint(function() {
    $('.js--wp-1').css('opacity', '1');
    $('.js--wp-1').addClass('animate__animated').addClass('animate__slideInLeft');
    // $("#about").slideUp(300).delay(1400).fadeIn(400);
}, { offset: '80%' });

$('.js--wp-2').waypoint(function() {
    $('.js--wp-2').css('opacity', '1');
    $('.js--wp-2').addClass('animate__animated').addClass('animate__fadeInUp');
}, {
    offset: '60%'
});

$('.js--wp-3').waypoint(function() {
    $('.js--wp-3').css('opacity', '1');
    $('.js--wp-3').addClass('animate__animated').addClass('animate__slideInLeft');
}, { offset: '50%' });

$('.js--wp-4').waypoint(function() {

    $('.js--wp-4').css('opacity', '1');
    $('.js--wp-4').addClass('animate__animated').addClass('animate__slideInRight');
    id1 = setInterval(frame1, 50); //90%
    id2 = setInterval(frame2, 25); //80%
    id3 = setInterval(frame3, 35); //70%
    id4 = setInterval(frame4, 45);
}, { offset: '50%' });

$('.js--wp-5').waypoint(function() {
    $('.js--wp-5').css('opacity', '1');
    $('.js--wp-5').addClass('animate__animated').addClass('animate__slideInLeft');
}, { offset: '100%' });

$('.js--wp-6').waypoint(function() {
    $('.js--wp-6').css('opacity', '1');
    $('.js--wp-6').addClass('animate__animated').addClass('animate__slideInUp');
    // $('.btn-tab').addClass('btn-all-active');
    document.getElementsByClassName("btn-tab")[0].classList.add("btn-all-active");
    document.getElementById("all").style.display = "flex";
}, { offset: '100%' });


function frame1() {
    if (width >= 90) {
        clearInterval(id);
    } else {
        width++;
        elem1.style.width = width + '%';
        elem2.style.width = width + '%';
        elem12.style.width = width + '%';
        document.getElementById("value1").innerHTML = width + '%';
        document.getElementById("value2").innerHTML = width + '%';
        document.getElementById("value12").innerHTML = width + '%';
    }
}

function frame2() {
    if (width >= 80) {
        clearInterval(id1);
    } else {
        width++;
        elem4.style.width = width + '%';
        elem10.style.width = width + '%';

        document.getElementById("value4").innerHTML = width + '%';
        document.getElementById("value10").innerHTML = width + '%';

    }
}

function frame3() {
    if (width >= 70) {
        clearInterval(id2);
    } else {
        width++;
        elem3.style.width = width + '%';
        elem6.style.width = width + '%';
        elem8.style.width = width + '%';
        elem11.style.width = width + '%';
        document.getElementById("value3").innerHTML = width + '%';
        document.getElementById("value6").innerHTML = width + '%';
        document.getElementById("value8").innerHTML = width + '%';
        document.getElementById("value11").innerHTML = width + '%';
    }
}

function frame4() {
    if (width >= 60) {
        clearInterval(id3);
    } else {
        width++;
        elem5.style.width = width + '%';
        elem7.style.width = width + '%';
        elem9.style.width = width + '%';
        document.getElementById("value5").innerHTML = width + '%';
        document.getElementById("value7").innerHTML = width + '%';
        document.getElementById("value9").innerHTML = width + '%';
    }
}



// $(".btn-tab").click(function() {

//     //declare variables
//     var tab_all = document.getElementById("all");
//     var tab_web = document.getElementById("webApp");
//     var tab_mob = document.getElementById("mobileApp");
//     var tab_game = document.getElementById("gameDev");
//     var tab_net = document.getElementById("networking");



//     if (this == tab_all) {
//         $(".tabcontent").css("display", "flex");
//     } else if (this == tab_web) {
//         $(".tabcontent").css("display", "none");
//         $("#maboservices").css("display", "flex");
//         $("#ttweb").css("display", "flex");
//         $("#autourweb").css("display", "flex");
//         $("#bbb").css("display", "flex");
//     } else if (this == tab_mob) {
//         $(".tabcontent").css("display", "none");
//         $("#cookme").css("display", "flex");
//         $("#ttAndroid").css("display", "flex");
//         $("#teraventures").css("display", "flex");
//     } else if (this == tab_game) {
//         $(".tabcontent").css("display", "none");
//         $("#boxshooter").css("display", "flex");
//         $("#rollermadness").css("display", "flex");

//     } else if (this == tab_net) {
//         $(".tabcontent").css("display", "none");
//         $("#openhab").css("display", "flex");
//     }
// });