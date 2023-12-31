/* ============================================
            preloader
===============================================*/
$(window).on('load', function () {
  // makes sure that whole site is loaded
  $('#preloader-gif, #preloader').fadeOut(5000, function () {});
});

/*=============================================
         js-voice-note-app scripts
================================================*/
$(function () {
  //**************** variables ****************//
  const slider = document.getElementById('slider');
  let indicators = document.querySelectorAll('.indicator');
  let slider_contents = document.querySelectorAll('.slider-content');
  let carousel_index = 0;
  
  let initial_position = null;
  let is_swipping = false;
  let swipping_distance = 0;
  
  /**
   * @description - adds an EventListener with an anonymous function that updates the
   * indicator with the selected class and removes the selected class from the appropriate
   * indicator. Also, add the transform style to slide the slider.
   * @param {element}
   * @param {number}
   */
  indicators.forEach(function (indicator, index) {
    indicator.addEventListener('click', function (e) {
      carousel_index = index;
      document.querySelector('.indicator.selected').classList.remove('selected');
      indicator.classList.add('selected');
      slider.style.transform = 'translate(' + carousel_index * -50 + '%)';
    })
  });
  
  slider_contents.forEach(function (slider_content, index) {
    slider_content.addEventListener('touchstart', function (e) {
      console.log(e);
      e.preventDefault();
      e.stopPropagation();
      console.log(e.target);
      if (e.touches.length !== 1) {
        return;
      }
      initial_position = e.touches[0].screenX;
      
      
      console.log(e.target);
      is_swipping = true;
    })
    slider_content.addEventListener('touchmove',function (e) {
      console.log(e);
      if (e.touches.length !== 1) {
        return;
      }
      if (!is_swipping) {
        return;
      }
      swipping_distance = e.touches[0].screenX - initial_position;
      console.log('sliding: ', e.touches[0].screenX - initial_position);
    })
    slider_content.addEventListener('touchend', function (e) {
      
      
      is_swipping = false;
    })
  })
});