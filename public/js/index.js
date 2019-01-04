
        var catagory;

        $(".dropdown-menu li a").click(function(){
          $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        });

       $('.dropdown-menu a').click(function(){
         catagory = $('#catagory').text()
         catagory = catagory.toLowerCase()
         url = $('#url').text()
         url = url.toLowerCase()

          //console.log(catagory, url)
          //$('#mydropdown').text($(this).text() + ' <span class="caret"></span>');
         });

        function getQuote(quote, author, catagory, urlselected) {
          var url, key;
          if (catagory === undefined) {
            catagory = ''
          }
          if (urlselected === undefined) {
            urlselected = 'andruxnet'
          }
          //console.log(catagory)
          if (urlselected == "wanyang") {
            url = 'https://amarlianna-wanyang-quote-v1.p.mashape.com/quote?wy=girl'
            key = 'xs1xxb7veHmshLgTZiSJNBwc4U7rp1iKERhjsnYagDK7AGZBKE'
          } else if (urlselected == "andruxnet") {
            var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=' + catagory;
            key = 'b0imCVpzwJmshep20kRdIRnPj6VYp13vCytjsnlovm6pc8w6Dt'
        }

         axios.get(url, {
             headers: {
               'X-Mashape-Key': key,
               'Accept': 'application/json',
               'Content-Type': 'application/x-www-form-urlencoded'
             }
           })
           .then(function (response) {
             //console.log(response);
              quote.html("<i class='fa fa-quote-left'> </i>" + " " + response.data[0].quote);
              author.html(response.data[0].author);
           })
           .catch(function (error) {
             console.log(error);
           });


          /*
          //change from jquery to axios
          var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=' + catagory;
          console.log(url, key);
          $.ajax({
            headers: {
              'X-Mashape-Key': key,
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            url: url,
            success: function(data) {
              //console.dir(data[0])

              //console.log(data[0])
              //console.log(data[0].quote)
              quote.html("<i class='fa fa-quote-left'> </i>" + " " + data[0].quote);
              author.html(data[0].author);
            }
          });
          */


        }

        function changeAll(change, quote, author, changeCSS) {
          change.css('background', changeCSS);
          getQuote(quote, author, catagory);
          //console.log(catagory)
        }
        $(document).ready(function() {
          var i = 0;
          var colors = [
            "#3B3738",
          ];
          var change = $(".change");
          var quote = $("#quote");
          var author = $("#author");

          changeAll(change, quote, author, colors[(i++) % 15]);
          $("#button").click(function() {
            changeAll(change, quote, author, colors[(i++) % 15]);
          });
        });
