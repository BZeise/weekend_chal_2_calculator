console.log('js');
$(onReady);
function onReady(){
  console.log('jq');
  $('#addButton').on('click', addThem);
  // $('#subtractButton').on('click', subtractThem);
  // $('#multiplyButton').on('click', multiplyThem);
  // $('#divideButton').on('click', divideThem);
  $('#clearButton').on('click', clearFields);
}

// declare object to send
// specifics will be added in each function
var dataToSend = {
  x: 0,
  y: 0,
  type: ""
};// end object

function clearFields() {
  $('#input1').val('');
  $('#input2').val('');
  $('#result').text('Result Here!');
}

function addThem(){
  console.log('add button clicked');
  console.log($('#input1').val(), '<--1 and 2-->', $('#input2').val() );
  dataToSend.x = $('#input1').val();
  dataToSend.y = $('#input2').val();
  dataToSend.type = "add";
  console.log(dataToSend);
  $.ajax ({
    type: 'POST',
    url: '/num',
    data: dataToSend,
    success: function(response) {
      console.log('response is: ', response);
      $('#result').text(response); // fill in response property
    }
  });// end ajax
}// end addThem
