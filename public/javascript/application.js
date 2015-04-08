$(document).ready(function() {

  function appendContact(to)
  {
    return function(value)
    {
      $(to).append( "<p>"  + value.first_name + " " + value.last_name + "<br>" + "email: " + value.email + "</p>");
    }
  }

  function iteratorFor(appender)
  {
    return function(data)
    {
      data.forEach(appender);
    }
  }

  var searchDivAppender = appendContact('#search_response');
  var newResponseAppender = appendContact("#new_response");
  var allResponseAppender = appendContact('#all_response');

  $("#srch_btn").on('click',function(){
    console.log($("#search").val());
    $.get('/search', { term: $("#search").val() }).done(iteratorFor(searchDivAppender));
  });

  $("#new_btn").on('click',function(){
    $.post('/contacts/new', { first_name: $("#firstname").val(), last_name: $("#lastname").val(), email: $("#email").val() })
      .done(newResponseAppender);
  });

  $("#all_btn").on('click',function()
  {
    $.get('/search').done(iteratorFor(allResponseAppender));
  });
});