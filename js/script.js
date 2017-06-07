$(document).ready(function() {
  $("form#shopping").submit(function(event) {
    var items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8'];

    items.forEach(function(item) {
      var userInput = $("input#" + item).val();
      $("." + item).text(userInput);
      alert(userInput);
    });

      event.preventDefault();
  });
});
