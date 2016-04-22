'use strict';

$(function () {

  // Show the users that I have in my data folder.
  $.get('/api/showForum').done(function(data) {
    var users = JSON.parse(data)});

    $('button#submit-message').click(postNewMessage);


    $('button#postModal').click(postMessage);

    $('button#getPower').click(getMath.power);
    $('button#sAnalyzer').click(getSentence);
    $('button#calculateAge').click(getAge);
  })
}

// Inserting DOM elements into $.put('/api/app.js/postMessage')
// var $asdf = val()
//
// var message = {
//   id: $asdf,
// }
//
// $.put(/app.js/, message)

function postMessage(){
  var $msgName = $('#postModal').find('input.newName').val();
  $('#postModal').find('input.newName').val('');

  var $msgMessage = $('#postModal').find('input.newMessage').val();
  $('#postModal').find('input.newMessage').val('');

  var $msgImage = $('#postModal').find('input.newImage').val();
  var $('#postModal').find('input.newImage').val('');

  var newMessage = {
    name: $msgName,
    message: $msgMessage
  }

  $.post('/api/newMessage', newMessage)
  .done(function(data){
    var cbNewMessage = JSON.parse(data);
  })
  .fail(function(err){

  })

};


// function renderSearch(data){
//   var $Card = $('<div>').attr('id', data.Symbol).addClass('symbol-card result  col-xs-12');
//   var $Exchange = $('<span>').addClass('stock result  col-xs-12').text(`Exchange: ${data.Exchange}`);
//   var $Name = $('<span>').addClass('name result  col-xs-12').text(`Name: ${data.Name}`);
//   var $sSymbol = $('<span>').addClass('symbol result  col-xs-12').text(`Symbol: ${data.Symbol}`);
//
//   $Card.append($Exchange, $Name, $sSymbol);
//
//   return $Card;
// }


function deleteMessage(){

  var id_ofDelete = $('');

  var messageToDelete = {
    name: $Name,
    message: $Message,
    id: $msgId
  }

  $.post(`/api/deleteMessage/${id}`, messageToDelete).done(function(data){
    var x = JSON.parse(data);});



    // console.log(x["Word Count"]);
    // $('#wordcount').text("Word Count: " + x["Word Count"]);
    // $('#charcount').text("Character Count: " + x["Character Count"]);
    // $('#spacecount').text("Space Count: " + x["Space Count"]);
    // $('#avgwordlength').text("Average Word Length: " + x["Avg Word Length"]);

}


function editMessage(){

  var year = $('#year').val();
  var month = $('#month').val();
  var day = $('#day').val();
  $.get(`/analyzer/age/${year}/${month}/${day}`).done(function(data){
    $('#ageDiv').text(`CONGRATULATION! You've been alive for: ${data}`);
  }).fail(function (error){
    console.log('error: ', error);
  })
}
