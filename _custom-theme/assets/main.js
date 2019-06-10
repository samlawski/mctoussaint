// Nagivation
$('.hamburger').click(function(){
  $(this).parent('.menu').toggleClass('open')
  $(this).toggleClass('is-active')
})


// YouTube video on home page
var $youtubeCta = $('.media__slide').find('a[href*="youtube.com"]')
var $youtubeCtaShort = $('.media__slide').find('a[href*="youtu.be"]')
var youtubeCode

if($youtubeCta.length > 0){
  youtubeCode = $youtubeCta.attr('href').split('v=').reverse()[0]
}else if($youtubeCtaShort.length > 0){
  youtubeCode = $youtubeCtaShort.attr('href').split('/').reverse()[0]
}

if(youtubeCode){
  var iframe = '<div class="embed-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + youtubeCode + '?rel=0&amp;showinfo=0;autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'

  $('.media__slide a').click(function(e){
    e.preventDefault()
    $(this).closest('.media__slide').html(iframe)
  })
}


// Reference audio
$('.referenz__audio').each(function(e){
  var $audio = $(this).find('audio')
  var $btn = $(this).find('.referenz__audio__btn')

  $btn.click(function(){
    if($(this).hasClass('fa-play-circle')){
      // Play:
      $audio.trigger('play')
      $(this).removeClass('fa-play-circle')
      $(this).addClass('fa-pause-circle')
    }else{
      // Pause:
      $audio.trigger('pause')
      $(this).removeClass('fa-pause-circle')
      $(this).addClass('fa-play-circle')
    }
  })
})


// Toggle booking calendar
$('#booking').click(function(){
  $('.booking__date').toggleClass('open')
})


// Smooth Scroll Anchor Links
// $(document).on('click', 'a[href^="#"]', function (event) {
//   event.preventDefault()
//   $('html, body').animate({
//     scrollTop: $($.attr(this, 'href')).offset().top
//   }, 500)
//   // Always close mobile menu:
//   $('nav .menu').removeClass('open')
// })

// Toggle Links
// $('a[data-target]').click(function(){
//   $($(this).data('target')).toggleClass('open')
// })

// Cookie Banner
var cookieBanner = (function(){
  var init = function(){
    showCookieBanner();
  };

  function readCookie(n) {
    let a = `; ${document.cookie}`.match(`;\\s*${n}=([^;]+)`);
    return a ? a[1] : '';
  }

  function showCookieBanner(){
    if(!readCookie('cookieBannerDismissed')){
      var banner_wrapper = document.createElement('div');
      banner_wrapper.setAttribute("id", "cookieBanner");
      banner_wrapper.style.cssText = `
        font-size: 0.6rem;
        background-color: #ddd;
        color: #444;
        width: 100%;
        text-align: center;
        padding: 10px;
        position: fixed;
        bottom: 0;
        left: 0;`;

      var banner_spacer = document.createElement('div');
      banner_spacer.setAttribute("id", "cookieBannerSpacer");
      banner_spacer.style.cssText = `
        height: 106px;
      `;

      var banner_text = document.createElement('p');
      banner_text.innerHTML = `
        In order to optimize our website for you we use cookies and analysis tools. By continuing to use the website, you consent to the use of cookies. For more information, please see our <a href="/privacy">Privacy Policy</a>.
        `;
      banner_wrapper.appendChild(banner_text);

      var banner_link = document.createElement('a');
      banner_link.innerHTML = `Ok`;
      banner_link.style.cssText = `
        margin-top: 6px;
        padding: 4px;
        border: 1px solid #444;
        display: inline-block;
        cursor: pointer;`;
      banner_link.addEventListener('click', function(){
        document.cookie = "cookieBannerDismissed=true";
        banner_wrapper.style.display = "none";
        banner_spacer.style.display = "none";
      })
      banner_wrapper.appendChild(banner_link);

      document.body.appendChild(banner_wrapper);
      document.body.appendChild(banner_spacer);
    }
  }


  return {
    init: init
  }
})()

cookieBanner.init()
