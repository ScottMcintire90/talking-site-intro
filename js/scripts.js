$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul").prepend("<li>Meow!</li>");
  });

  $("button#woof").click(function() {
    $("ul").prepend("<li>Woof!</li>");
  });
});
