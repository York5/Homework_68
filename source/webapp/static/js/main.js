//     const container = $('.container');
//     let add_button = $(document.getElementById('add_button'));
//     let subtract_button = $(document.getElementById('subtract_button'));
//     let multiply_button = $(document.getElementById('multiply_button'));
//     let divide_button = $(document.getElementById('divide_button'));
//
//     function jqueryAjaxError(response, status) {
//     console.log(response);
//     console.log(status);
//     console.log('error');
// }
//     function onAddButtonClick() {
//         $.ajax({
//             type: 'POST',
//             url: 'add',
//             data: {
//                 "A": $('input_A').val().serialize(),
//                 "B": $('input_B').val().serialize()
//             },
//             success: function () {
//                 alert('post request sent');
//                 console.log(this.data);
//             },
//             error: jqueryAjaxError
//         })
//     }
//
//     add_button.addEventListener('click', onAddButtonClick);

    $(document).ready(function() {
    console.log('I have loaded!')
});