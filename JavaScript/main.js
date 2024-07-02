// Side bar 

$(".open").click(function() {
  $("#leftMenu").css({ width: '250px' });
  $("#open").css({ left: '250px' }); 
});

$(".close").click(function() {
  $("#leftMenu").css({ width: '0px' });
  $("#open").css({ left: '0px' }); 
});



$("#leftMenu a").click(function(){
    
  var sectionId= $(this).attr("href");
  
  var positionOfSection = $(sectionId).offset().top;
  
  $("html , body").animate({scrollTop:positionOfSection},2000);
  
})  

// Singer Section

$('h3').click(function(e) {
  $('.slideDown').not($(e.target).next()).slideUp(400);
  $(e.target).next().slideToggle(400);
});  

// countdown section

let countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();


let x = setInterval(function() {


  let now = new Date().getTime();

  let distance = countDownDate - now;


  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  Days.innerHTML = days
  Hours.innerHTML = hours
  Minutes.innerHTML = minutes
  Seconds.innerHTML = seconds

}, 1000);  

// Contact us section

let Max = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let remain = Max-length;
  if(remain<=0)
            {
              Remain.innerHTML = 'No left';
                
            }  
        else{  
        
          Remain.innerHTML = remain
        }  
});        






///////////////////////////////
