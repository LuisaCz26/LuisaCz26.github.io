function smoothScrollingTo(target){
    $('html,body').animate({scrollTop:$(target).offset().top}, 1000);
}

$('a[href^=\\#]').on('click', function(event){     
    event.preventDefault();
    smoothScrollingTo(this.hash);
});
  
$(document).ready(function(){
    if(location.hash !== "") smoothScrollingTo(location.hash);
});