<script src="myjquery.js">
$(document).ready(function(){
	$('#button').on('click',function(){
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=btc",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
		"x-rapidapi-key": "abbe76c8c6msh1e4e95b6fe61e83p1bfd32jsne8ccd4458974"
	})
    
}

}
$.ajax(settings).done(function (response) {
    var res=response.source;
    var coinid=response.coin_id;
   // document.write(res);
    document.getElementById("p1").innerHTML=res;
    document.getElementById("coinid").value = coinid;
});
});
