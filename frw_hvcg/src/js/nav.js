$(document).ready(function(){
    $(".btn-toggle").click(function(){
      $(".navmobile .nav-menu").slideToggle("slow");
    });
    // $(".home").click(function(){
    //     $(".navmobile .nav-sub").slideToggle("slow");
    //   });
    $(".nav-box").each(function(index,value){
        var nav = $(value);
        var nav01 = nav.find(".nav-dropdown");
        nav01.click(function(){
            var navsub = nav.find(".nav-sub");
            navsub.slideToggle('fast')
        })
    })
    $(".nav-box01").each(function(index,value){
      var nav = $(value);
      var nav01 = nav.find(".nav-dropdown01");
      nav01.click(function(){
          var navsub = nav.find(".nav-sub-left");
          navsub.slideToggle('fast')
      })
  })
    $(".project").click(function(){
      $(".navmobile .nav-sub-left").slideToggle("slow");
    });
  });

  $(window).scroll(function(){
    var menutop = $('.navsticky').height();
    var e = $(window).scrollTop();
    var menumobiletop = $('.navmobile').height();
    if(e > menumobiletop){
      $('.navmobile').addClass("ps-fix");
    } else{
      $('.navmobile').removeClass("ps-fix");
    }
    if(e > menutop){
      $('.navsticky').addClass("ps-fix");
    }else{
      $('.navsticky').removeClass("ps-fix");
    }
   
  
  })
  $('.btn-toggle').click(function(){
		$(this).toggleClass('clo-menu');
	})