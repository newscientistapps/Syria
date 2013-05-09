var all = L.mapbox.tileLayer('newscientist26102012.map-ut1k6imv'),
	Q12011 = L.mapbox.tileLayer('newscientist26102012.map-0o8p3fb1'),
	Q22011 = L.mapbox.tileLayer('newscientist26102012.map-djlmnumv'),
	Q32011 = L.mapbox.tileLayer('newscientist26102012.map-djlmnumv'),
	Q42011 = L.mapbox.tileLayer('newscientist26102012.map-djlmnumv'),
	Q12012 = L.mapbox.tileLayer('newscientist26102012.map-djlmnumv'),
	Q22012 = L.mapbox.tileLayer('newscientist26102012.map-djlmnumv'),
	Q32012 = L.mapbox.tileLayer('newscientist26102012.map-djlmnumv'),
	Q42012 = L.mapbox.tileLayer('newscientist26102012.map-djlmnumv'),
	Q12013 = L.mapbox.tileLayer('newscientist26102012.map-djlmnumv');
	
var map = L.map('map', {
    center: new L.LatLng(35, 36.5),
    zoom: 7, 
    maxZoom: 9,
    minZoom: 5,
    layers: [all]
});

var baseMaps = {
    "All": all,
    "Q1 2011": Q12011,
	"Q2 2011": Q22011,
	"Q3 2011": Q32011,
	"Q4 2011": Q42011,
	"Q1 2012": Q12012,
	"Q2 2012": Q22012,
	"Q3 2012": Q32012,
	"Q4 2012": Q42012,
	"Q1 2013": Q12013
};

var layersControl = new L.Control.Layers(baseMaps, null, {collapsed: false});
map.addControl(layersControl);
