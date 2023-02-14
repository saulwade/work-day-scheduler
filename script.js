
// Defining variables

var timeBlocks = $('.container');
var timeBlockRow = $('.time-block');
var isPresent;
var isPast;
var isFuture;


var todayDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(todayDate);

var saveBtnEl = $('.saveBtn');

saveBtnEl.on('click', function (event) {
    event.preventDefault()


    var time1 = $(this).parent().parent().data('time')

    var descriptionBox = $(this).siblings('.description').val();

    localStorage.setItem('time', time1);
    localStorage.setItem('description', descriptionBox)
});

function colorDate() {
    var currentHour = moment().hour()

    timeBlockRow.each(function () {


        var blockHour = parseInt($(this).data('time'));


        if (currentHour === blockHour) {
            $(this).addClass('present')

        } else if (currentHour > blockHour) {
            $(this).addClass('past')
        }
        else {
            $(this).addClass('future')
        }
    });
}


