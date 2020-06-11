  $(document).ready(function(){
    var arr=[];
     var print = "";
      
      $.ajax({url: "https://api.coincap.io/v2/assets", success: function(result){
     

     for(index in result.data){

      arr.push(result.data[index].symbol);
     }

  }});
      
     var ajax_call = function() {
  $.ajax({url: "https://api.coincap.io/v2/assets", success: function(result){
     
     print='<div class="limiter"><div class="container-table100"><div class="wrap-table100"><div class="table100 ver1 m-b-110"><div class="table100-head"><table><thead><tr class="row100 head"><th class="cell100 column1"><center>Rank</center></th><th class="cell100 column2"><center>Symbol</center></th><th class="cell100 column3"><center>Name</center></th><th class="cell100 column4"><center>Price</center></th><th class="cell100 column5"><center>Market Cap</center></th><th class="cell100 column6"><center>VWAP (24Hr)</center></th><th class="cell100 column7"><center>Supply</center></th><th class="cell100 column8"><center>Volume (24Hr)</center></th><th class="cell100 column9"><center>Change (24Hr)</center></th></tr></thead></table></div><div class="table100-body js-pscroll"><table><tbody>';
     for(index in result.data){

      var price = result.data[index].priceUsd;
      var price_fix = parseFloat(price).toFixed(2);

      var marketCap = result.data[index].marketCapUsd;
      var marketCap_fix = parseFloat(marketCap).toFixed(2);

      var vwap = result.data[index].vwap24Hr;
      var vwap_fix = parseFloat(vwap).toFixed(2);

      var supply = result.data[index].supply;
      var supply_fix = parseFloat(supply).toFixed(2);

      var volume = result.data[index].volumeUsd24Hr;
      var volume_fix = parseFloat(volume).toFixed(2);

      var change = result.data[index].changePercent24Hr;
      var change_fix = parseFloat(change).toFixed(2);
     
      print+='<tr class="row100 body"><td  class="cell100 column1" >'+result.data[index].rank+'</td> <td class="cell100 column1"> '+result.data[index].symbol+'</td> <td class="cell100 column1"> '+result.data[index].name+'</td> <td class="cell100 column1"> $'+price_fix+'</td> <td class="cell100 column1"> $'+marketCap_fix+'</td> <td class="cell100 column1"> $'+vwap_fix+'</td> <td class="cell100 column1"> '+supply_fix+'</td> <td class="cell100 column1"> $'+volume_fix+'</td> <td class="cell100 column1" id="colred"> '+change_fix+'</td> </tr>';
     }
     print+="</table></div></div></div></div></div>";
     // $("div.apis").empty();
     $(".apis").html(print);
  }});
};
var interval = 1000*2;
setInterval(ajax_call, interval);


var apiCall = function() {

$.getJSON('https://min-api.cryptocompare.com/data/v2/news/?lang=EN').then(function(response){
var data1=response.Data[0].body;
var data2=response.Data[1].body;
var data3=response.Data[2].body;
        var i1=response.Data[0].imageurl;
        var i2=response.Data[1].imageurl;
        var i3=response.Data[2].imageurl;
        var a1=response.Data[3].url;
        var a2=response.Data[4].url;
        var a3=response.Data[5].url;
        var data4=response.Data[4].body;
var data5=response.Data[5].body;
var data6=response.Data[6].body;
        var i4=response.Data[4].imageurl;
        var i5=response.Data[5].imageurl;
        var i6=response.Data[6].imageurl;
        var a4=response.Data[4].url;
        var a5=response.Data[5].url;
        var a6=response.Data[6].url;
       
        $('#i1').attr("src",i1);
        $('#i2').attr("src",i2);
        $('#i3').attr("src",i3);
        $('#a1').attr("href",a1);
        $('#a2').attr("href",a2);
        $('#a3').attr("href",a3);
document.getElementById("p1").innerHTML=data1;
document.getElementById("p2").innerHTML=data2;
document.getElementById("p3").innerHTML=data3;
        $('#i4').attr("src",i4);
        $('#i5').attr("src",i5);
        $('#i6').attr("src",i6);
        $('#a4').attr("href",a4);
        $('#a5').attr("href",a5);
        $('#a6').attr("href",a6 );

        document.getElementById("p4").innerHTML=data4;
document.getElementById("p5").innerHTML=data5;
document.getElementById("p6").innerHTML=data6;
});
};
var interval2 = 1000*5;
setInterval(apiCall, interval2);

  $("#button").click(function(){
      
    var crypto = $("#crypto").val();
    var curr = $("#currency").val();
    // var url ="https://bravenewcoin-v1.p.rapidapi.com/ticker?show=inr&coin=btc";
    var url ="https://bravenewcoin-v1.p.rapidapi.com/ticker?show="+curr+"&coin="+crypto;
    // alert(url);
   
  
var settings = {
  "async": true,
  "crossDomain": true,
  "url": url,
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
    "x-rapidapi-key": "5479ba3a36msh32f8dac0f4ae475p12c445jsnde3540ec712a"
  }
}

$.ajax(settings).done(function (response) {


  var source = response.source;

  var coin_id = response.coin_id;
  var  currency= response.currency;
  var  utc_date= response.utc_date;
  var coin_name = response.coin_name;
  var  last_price= response.last_price;
  var currency_name = response.currency_name;

  if(utc_date==coin_name){
    var error = "Enter correct currency code";
    $("#error").html(error);
  }

  document.getElementById("source").value = source;
  document.getElementById("coinid").value = coin_id;
  document.getElementById("currency5").value = currency;
  document.getElementById("date").value = utc_date;
  document.getElementById("coinname").value = coin_name;
  document.getElementById("lastprice").value = last_price;
  document.getElementById("currencyname").value = currency_name;
  // var revdata = JSON.stringify(response);
  // alert(response);
});
});



  $("#qty").keyup(function(){
    var crypto2 = $("#crypto2").val();
    var curr2 = $("#currency2").val();
    var qty = $("#qty").val();
    var url = "https://bravenewcoin-v1.p.rapidapi.com/convert?qty="+qty+"&from="+crypto2+"&to="+curr2;
    var settings2 = {
  "async": true,
  "crossDomain": true,
  "url": url,
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
    "x-rapidapi-key": "5479ba3a36msh32f8dac0f4ae475p12c445jsnde3540ec712a"
  }
}

$.ajax(settings2).done(function (response) {
  var to_quantity = response.to_quantity;

  document.getElementById("worth").value = to_quantity;
});
  });
  $( function() {
  $( "#crypto" ).autocomplete({
      source : arr
    });
   $( "#crypto2" ).autocomplete({
      source: arr
    });
 });
});

 


   
