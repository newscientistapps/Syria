var all = L.mapbox.tileLayer('newscientist26102012.map-djlmnumv'),
	a1 = L.mapbox.tileLayer('newscientist26102012.map-djlmnumv');
            
var map = L.map('map', {
    center: new L.LatLng(35, 36.5),
    zoom: 7,
    maxZoom: 9,
    minZoom: 5,
    layers: [all]
});

var baseMaps = {
    "All": all,
    "2013": a1
};

var layersControl = new L.Control.Layers(baseMaps, null, {collapsed: false});
map.addControl(layersControl);
