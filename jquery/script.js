$(document).ready(function() {
    $('.menu-toggle').click(function() {
      $('.sidebar').toggleClass('sidebar-open');
    });
  
    $(document).click(function(event) {
      var target = $(event.target);
      if (!target.closest('.menu-toggle, .sidebar').length && $('.sidebar').hasClass('sidebar-open')) {
        $('.sidebar').removeClass('sidebar-open');
      }
    });
  });