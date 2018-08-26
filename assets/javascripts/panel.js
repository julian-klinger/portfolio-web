
$(function() {
  $('.panel-button').click(function () {
    var panelID = $(this).attr('data-panelid');
    if ($(this).hasClass('btn-active')) {
      $(this).removeClass('btn-active');
      $('#' + panelID).hide(400);
    }
    else {
      $('#' + panelID).show(400);
      $('#' + panelID).siblings().hide();
      $(this).addClass('btn-active');
      $(this).parents().parents().siblings().children().children().removeClass('btn-active');
    }
  });
})