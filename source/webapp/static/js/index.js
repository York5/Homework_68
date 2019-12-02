
const container = $('.container');
let add_button = $(document.getElementById('add'));
let subtract_button = $(document.getElementById('subtract'));
let multiply_button = $(document.getElementById('multiply'));
let divide_button = $(document.getElementById('divide'));
let input_A = $(document.getElementById('input_A'));
let input_B = $(document.getElementById('input_B'));

function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
}


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
    let answer_div = $(document.createElement("div"));
    answer_div.css("background-color", "green");
    answer_div.addClass("success_div");
    let answer = document.createElement("p");
    answer.innerText = "Your Answer:" + " " + response.answer;
    answer_div.append(answer);
    container.append(answer_div);
    console.log(response);
}

function errorFunction(response) {
    let answer_div = $(document.createElement("div"));
    answer_div.css("background-color", "red");
    answer_div.addClass("error_div");
    let answer = $(document.createElement("p"));
    answer.text($.parseJSON(response.responseText).error);
    answer_div.append(answer);
    container.append(answer_div);
}


$(document).ready(function () {
    add_button.bind('click', onButtonClick);
    subtract_button.bind('click', onButtonClick);
    multiply_button.bind('click', onButtonClick);
    divide_button.bind('click', onButtonClick);
});