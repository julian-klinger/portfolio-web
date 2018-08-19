
$(function() {
  $('.panel-button').click(function () {
    var panelID = $(this).attr('data-panelid');
    if  ($(this).hasClass('btn-active')) {
      $(this).removeClass('btn-active');
      $('#' + panelID).hide(600);
    }
    else {
      $('#' + panelID).show(600);
      $('#' + panelID).siblings().hide();
      $(this).addClass('btn-active');
      $(this).parents().siblings().children().removeClass('btn-active');
    }
  });
})