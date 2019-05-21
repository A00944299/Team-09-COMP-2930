
	var mymap = L.map('mapid').setView([49.250586, -123.003005], 15);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

	var markers = L.layerGroup();

	function addToMap(x,y){
		var marker = L.marker([x,y]).addTo(mymap);
		marker.bindPopup();
		marker.addTo(markers);
	}

	function clear(){
		markers.clearLayers();
	}
	markers.addTo(mymap);
// SE Buildings
	/*var SE01 = L.marker([49.251153, -122.999092]).addTo(mymap);
	var SE02 = L.marker([49.251386, -123.001534]).addTo(mymap);
	var SE04 = L.marker([49.251339, -123.000147]).addTo(mymap);
	var SE06 = L.marker([49.250924, -123.000546]).addTo(mymap);
	var SE08 = L.marker([49.250796, -123.001394]).addTo(mymap);
	var SE09 = L.marker([49.250414, -123.001337]).addTo(mymap);
	var SE12 = L.marker([49.249936, -123.001589]).addTo(mymap);
	var SE14 = L.marker([49.249469, -123.000890]).addTo(mymap);
	var SE16 = L.marker([49.248829, -123.001043]).addTo(mymap);

//SW Buildings
	var SW01 = L.marker([49.251174, -123.002779]).addTo(mymap);
	var SW02 = L.marker([49.250393, -123.003468]).addTo(mymap);
	var SW03 = L.marker([49.250041, -123.002677]).addTo(mymap);
	var SW05 = L.marker([49.249751, -123.002635]).addTo(mymap);
	var SW09 = L.marker([49.248567, -123.002857]).addTo(mymap);

//NE Buildings
	var NE01 = L.marker([49.254129, -123.000994]).addTo(mymap);
	var NE02 = L.marker([49.253355, -123.001546]).addTo(mymap);
	var NE03 = L.marker([49.253847, -122.999825]).addTo(mymap);
	var NE04 = L.marker([49.253368, -123.000633]).addTo(mymap);
	var NE06 = L.marker([49.253300, -122.999776]).addTo(mymap);
	var NE07 = L.marker([49.253692, -122.998587]).addTo(mymap);
	var NE08 = L.marker([49.253300, -122.999243]).addTo(mymap);
	var NE09 = L.marker([49.254048, -122.998707]).addTo(mymap);
	var NE10 = L.marker([49.253259, -122.998486]).addTo(mymap);
	var NE12 = L.marker([49.252720, -122.998489]).addTo(mymap);
	var NE16 = L.marker([49.252007, -122.999725]).addTo(mymap);
	var NE18 = L.marker([49.252058, -123.000600]).addTo(mymap);
	var NE20 = L.marker([49.252046, -123.001542]).addTo(mymap);
	var NE21 = L.marker([49.252901, -123.001681]).addTo(mymap);
	var NE22 = L.marker([49.252487, -123.001704]).addTo(mymap);
	var NE23 = L.marker([49.252923, -123.001109]).addTo(mymap);
	var NE24 = L.marker([49.252460, -123.001114]).addTo(mymap);
	var NE25 = L.marker([49.252916, -123.000444]).addTo(mymap);
	var NE28 = L.marker([49.252474, -122.999908]).addTo(mymap);

//NW Buildings
	var NW01 = L.marker([49.252744, -123.003287]).addTo(mymap);
	var NW03 = L.marker([49.253261, -123.002600]).addTo(mymap);
	var NW05 = L.marker([49.252497, -123.002299]).addTo(mymap);
	var NW06 = L.marker([49.252100, -123.002408]).addTo(mymap);

	var EasterEgg = L.marker([29.30, 0.9]).addTo(mymap);

	SE01.bindPopup("<b>SE01</b>");
	SE02.bindPopup("<b>SE02</b>");
	SE04.bindPopup("<b>SE04</b>");
	SE06.bindPopup("<b>SE06</b>");
	SE08.bindPopup("<b>SE08</b>");
	SE09.bindPopup("<b>SE09</b>");
	SE12.bindPopup("<b>SE12</b>");
	SE14.bindPopup("<b>SE14</b>");
	SE16.bindPopup("<b>SE16</b>");

	SW01.bindPopup("<b>SW01</b>").openPopup();
	SW02.bindPopup("<b>SW02</b>");
	SW03.bindPopup("<b>SW03</b>");
	SW05.bindPopup("<b>SW05</b>");
	SW09.bindPopup("<b>SW09</b>");

	NE01.bindPopup("<b>NE01</b>");
	NE02.bindPopup("<b>NE02</b>");
	NE03.bindPopup("<b>NE03</b>");
	NE04.bindPopup("<b>NE04</b>");
	NE06.bindPopup("<b>NE06</b>");
	NE07.bindPopup("<b>NE07</b>");
	NE08.bindPopup("<b>NE08</b>");
	NE09.bindPopup("<b>NE09</b>");
	NE10.bindPopup("<b>NE10</b>");
	NE12.bindPopup("<b>NE12</b>");
	NE16.bindPopup("<b>NE16</b>");
	NE18.bindPopup("<b>NE18</b>");
	NE20.bindPopup("<b>NE20</b>");
	NE21.bindPopup("<b>NE21</b>");
	NE22.bindPopup("<b>NE22</b>");
	NE23.bindPopup("<b>NE23</b>");
	NE24.bindPopup("<b>NE24</b>");
	NE25.bindPopup("<b>NE25</b>");
	NE28.bindPopup("<b>NE28</b>");

	NW01.bindPopup("<b>NW01</b>");
	NW03.bindPopup("<b>NW03</b>");
	NW05.bindPopup("<b>NW05</b>");
	NW06.bindPopup("<b>NW06</b>");
*/
	/*EasterEgg.bindPopup("<b>This is where you find elephant waste</b>");*/
	var position = L.layerGroup();
	position.addTo(mymap);

	mymap.locate({setView: true, maxZoom: 16});

	function onLocationFound(e) {
	var radius = e.accuracy / 2;
	
	
    var pos = L.marker(e.latlng).addTo(mymap)
		.bindPopup("You are within " + radius + " meters from this point").openPopup();
	pos.addTo(position);
    L.circle(e.latlng, radius).addTo(mymap);
	}

	mymap.on('locationfound', onLocationFound);
	
	function onLocationError(e) {
    alert(e.message);
	}

	mymap.on('locationerror', onLocationError);
	