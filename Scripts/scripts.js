$(document).ready(function(){
    $("#exampleButton").click(function(){
        let value = $("#exampleInput").val();
        let outputText = "You entered: " + value;
        let output = $("#exampleOutput");
        output.text(outputText);
        output.addClass('alert');
        output.addClass('alert-info');
    });
});