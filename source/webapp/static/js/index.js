
const container = $('.container');
let add_button = $(document.getElementById('add'));
let subtract_button = $(document.getElementById('subtract'));
let multiply_button = $(document.getElementById('multiply'));
let divide_button = $(document.getElementById('divide'));
let input_A = $(document.getElementById('input_A'));
let input_B = $(document.getElementById('input_B'));


let answer_div = $(document.createElement("div"));
let answer = $(document.createElement("p"));
answer_div.append(answer);
container.append(answer_div);


function onButtonClick(event) {
    $.ajax({
        url: event.target.id,
        method: 'post',
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            "A": parseInt(input_A.val(), 10),
            "B": parseInt(input_B.val(), 10)
        }),
        success: successFunction,
        error: errorFunction,
    })
}

function successFunction(response) {
    answer_div.css("background-color", "green");
    answer_div.addClass("success_div");
    answer.text("Your Answer:" + " " + response.answer);
    console.log(response);
}

function errorFunction(response) {
    answer_div.css("background-color", "red");
    answer_div.addClass("error_div");
    answer.text($.parseJSON(response.responseText).error);
}


$(document).ready(function () {
    add_button.bind('click', onButtonClick);
    subtract_button.bind('click', onButtonClick);
    multiply_button.bind('click', onButtonClick);
    divide_button.bind('click', onButtonClick);
});