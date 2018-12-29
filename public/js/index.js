function getQuote(quote, author, catagory) {
  $.ajax({
    headers: {
      'X-Mashape-Key': 'b0imCVpzwJmshep20kRdIRnPj6VYp13vCytjsnlovm6pc8w6Dt',
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=',
    success: function(data) {
      //console.dir(data[0])

      //console.log(data[0])
      //console.log(data[0].quote)
      quote.html("<i class='fa fa-quote-left'> </i>" + " " + data[0].quote);
      author.html(data[0].author);
    }
  });
}

function changeAll(change, quote, author, changeCSS,catagory) {
  change.css('background', changeCSS);
  getQuote(quote, author, catagory);
  //console.log(quote)
}
$(document).ready(function() {
  var i = 0;
  var colors = [
    '#27ae60',
    '#2c3e50',
    '#16a085',
    '#e74c3c',
    '#9b59b6',
    '#342224',
    '#BDBB99',
    '#FB6964',
    "#C63D0F",
    "#3B3738",
    "#005A31",
    '#472E32',
    "#558C89",
    "#f39c12",
    "#77b1a9"
  ];
  var change = $(".change");
  var quote = $("#quote");
  var author = $("#author");

  changeAll(change, quote, author, colors[(i++) % 15]);
  $("#button").click(function() {
    changeAll(change, quote, author, colors[(i++) % 15]);
  });
});
