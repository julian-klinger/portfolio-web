
$(function() {
  $('.panel-button').click(function () {
    var panelID = $(this).attr('data-panelid');
    $('#' + panelID).show(200);
    $('#' + panelID).siblings().hide();
    $(this).addClass('btn-active');
    $(this).parents().siblings().children().removeClass('btn-active');
  });
})