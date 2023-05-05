/* global L */
var debug = false;

; (function (window) {
  function init(mapid) {
    var minZoom = 2
    var maxZoom = 7
    var img = [
      2048, // original width of image
      1536  // original height of image
    ]

    // create the map
    var map = L.map(mapid, {
      minZoom: minZoom,
      maxZoom: maxZoom,
      center: [0, 0]
    })

    // assign map and image dimensions
    var rc = new L.RasterCoords(map, img)

    // set the view on a marker ...
    map.setView(rc.unproject([0, 0]), 4)

    map.setZoom(2);

    // add layer control object
    var cities = layerMarkers(window.markers.cities, "cities", 3, map, rc, img);
    var capitals = layerMarkers(window.markers.capitals, "capitals", 6, map, rc, img);
    var towns = layerMarkers(window.markers.towns, "towns", 1, map, rc, img);
    var poi = layerPoi(window.markers.poi, map, rc, img);

    L.control.layers({}, {
      'Polygon': layerPolygon(map, rc),
      'Countries': layerCountries(map, rc),
      'Bounds': layerBounds(map, rc),
      'Capitals': capitals,
      'Cities': cities,
      'Towns': towns,
      "POI":poi
    }).addTo(map)

    var imageBounds = [
      [-1000, -1000],
      [1000, 1000]
    ];

    L.imageOverlay("mapoverview.svg", imageBounds).addTo(map)

    map.on('zoomend', function () {
      var zoom = map.getZoom();
      if (zoom < 4) {
        map.removeLayer(towns);
        map.removeLayer(poi);
      } else {
        map.addLayer(towns);
        map.addLayer(poi);
      }

      if (zoom <= 2) {
        map.removeLayer(cities);
      } else {
        map.addLayer(cities);
      }
    });
  }

  /**
   * layer with markers
   */
  function layerBounds(map, rc) {
    var layerBounds = L.layerGroup([])
    map.addLayer(layerBounds)

    map.on('click', function (event) {
      var coord = rc.project(event.latlng)
      if (debug === true) {
        var marker = L.marker(rc.unproject(coord))
          .addTo(layerBounds)
        marker.bindPopup('[' + Math.floor(coord.x) + ',' + Math.floor(coord.y) + ']')
          .openPopup()
      } else {
        console.log('Clicked [' + Math.floor(coord.x) + ',' + Math.floor(coord.y) + ']')
      }
    })

    return layerBounds
  }

  /**
   * layer using geoJson data for countries adding a circle marker
   */
  function layerCountries(map, rc) {
    var layerCountries = L.geoJson(window.markers.countries, {
      // correctly map the geojson coordinates on the image
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        label = String(feature.properties.name)
        return L.circleMarker(latlng, {
          radius: 0,
          fillColor: 'transparent',
          color: 'transparent'
        }).bindTooltip(label, { permanent: true, opacity: 0.7, direction: "center", className: "country-place-marker" }).openTooltip();
      }
    })
    map.addLayer(layerCountries)
    return layerCountries
  }

  function layerMarkers(obj, name, scale, map, rc) {
    var layerGeo = L.geoJson(obj, {
      // correctly map the geojson coordinates on the image
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: featurePopup,
      pointToLayer: function (feature, latlng) {
        label = String(feature.properties.name) // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
        return new L.CircleMarker(latlng, {
          radius: scale,
          className: name
        }).bindTooltip(label, { permanent: true, opacity: 0.7, direction: "center", className: "place-marker" }).openTooltip();
      }
    })
    map.addLayer(layerGeo)
    return layerGeo
  }

  function layerPoi(obj, map, rc) {
    var layerGeo = L.geoJson(obj, {
      // correctly map the geojson coordinates on the image
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: featurePopup,
      pointToLayer: function (feature, latlng) {
        label = String(feature.properties.name) // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
        return new L.shapeMarker(latlng, {
          className: "poi",
          radius: 3
        }).bindTooltip(label, { permanent: true, opacity: 0.7, direction: "center", className: "poi-marker" }).openTooltip();
      }
    })
    map.addLayer(layerGeo)
    return layerGeo
  }

  function featurePopup(feature, layer) {
    if (feature.properties && feature.properties.name) {
      var popup = L.popup();
      var description = feature.properties.short_description || "";

      var content = '<b>'+feature.properties.name+'</b>'+'<p>'+description+'</p>';
      if(feature.properties.wa_link && feature.properties.wa_link != "") {
        content += '<a href="'+feature.properties.wa_link+'">World Anvil</a>';
      }
      popup.setContent(content);
      layer.bindPopup(popup);
    }
  }

  /**
   * layer drawing a polygon
   */
  function layerPolygon(map, rc) {
    var points = window.polygon.map(function (point) {
      return rc.unproject([point.x, point.y])
    })
    var layerPolygon = L.polygon([points])
    map.addLayer(layerPolygon)
    return layerPolygon
  }

  init('map')
}(window))
