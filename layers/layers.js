var wms_layers = [];


        var lyr_GoogleTraffic_0 = new ol.layer.Tile({
            'title': 'Google Traffic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_2 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_3 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_GroundReservoirs_4 = new ol.format.GeoJSON();
var features_GroundReservoirs_4 = format_GroundReservoirs_4.readFeatures(json_GroundReservoirs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroundReservoirs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroundReservoirs_4.addFeatures(features_GroundReservoirs_4);
var lyr_GroundReservoirs_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GroundReservoirs_4, 
                style: style_GroundReservoirs_4,
                popuplayertitle: 'Ground Reservoirs',
                interactive: true,
                title: '<img src="styles/legend/GroundReservoirs_4.png" /> Ground Reservoirs'
            });
var format_OverheadTanks_5 = new ol.format.GeoJSON();
var features_OverheadTanks_5 = format_OverheadTanks_5.readFeatures(json_OverheadTanks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OverheadTanks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OverheadTanks_5.addFeatures(features_OverheadTanks_5);
var lyr_OverheadTanks_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OverheadTanks_5, 
                style: style_OverheadTanks_5,
                popuplayertitle: 'Overhead Tanks',
                interactive: true,
                title: '<img src="styles/legend/OverheadTanks_5.png" /> Overhead Tanks'
            });

lyr_GoogleTraffic_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_GoogleLabels_2.setVisible(true);lyr_GoogleHybrid_3.setVisible(true);lyr_GroundReservoirs_4.setVisible(true);lyr_OverheadTanks_5.setVisible(true);
var layersList = [lyr_GoogleTraffic_0,lyr_GoogleTerrain_1,lyr_GoogleLabels_2,lyr_GoogleHybrid_3,lyr_GroundReservoirs_4,lyr_OverheadTanks_5];
lyr_GroundReservoirs_4.set('fieldAliases', {'SNo': 'SNo', 'Name_of_Ow': 'Name_of_Ow', 'Location': 'Location', 'Department': 'Department', 'Capacity_i': 'Capacity_i', 'X': 'X', 'Y': 'Y', });
lyr_OverheadTanks_5.set('fieldAliases', {'SNo': 'SNo', 'Name_of_Ow': 'Name_of_Ow', 'Location': 'Location', 'Department': 'Department', 'Capacity_i': 'Capacity_i', 'X': 'X', 'Y': 'Y', });
lyr_GroundReservoirs_4.set('fieldImages', {'SNo': 'TextEdit', 'Name_of_Ow': 'TextEdit', 'Location': 'TextEdit', 'Department': 'TextEdit', 'Capacity_i': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_OverheadTanks_5.set('fieldImages', {'SNo': 'TextEdit', 'Name_of_Ow': 'TextEdit', 'Location': 'TextEdit', 'Department': 'TextEdit', 'Capacity_i': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_GroundReservoirs_4.set('fieldLabels', {'SNo': 'inline label - always visible', 'Name_of_Ow': 'inline label - always visible', 'Location': 'inline label - always visible', 'Department': 'inline label - always visible', 'Capacity_i': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'no label', });
lyr_OverheadTanks_5.set('fieldLabels', {'SNo': 'inline label - always visible', 'Name_of_Ow': 'inline label - always visible', 'Location': 'inline label - always visible', 'Department': 'inline label - always visible', 'Capacity_i': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_OverheadTanks_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});