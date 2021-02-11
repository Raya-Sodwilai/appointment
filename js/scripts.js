$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const descriptionInput = $("input#description").val();
    const dateInput = $("input#date").val();
    const timeInput = $("input#time").val();

    $(".person").text(person1Input);
    $(".person").text(person2Input);
    $(".description").text(descriptionInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);

    $("#appointment").show();

    event.preventDefault();
  });
});