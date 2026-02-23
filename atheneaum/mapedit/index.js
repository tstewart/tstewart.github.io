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

    addLayers(map, rc);

    var imageBounds = [
      [-1000, -1000],
      [1000, 1000]
    ];

    L.imageOverlay("mapoverview.svg", imageBounds).addTo(map)

    map.on('click', function (event) {
      var coord = rc.project(event.latlng)
      $('#coordx').val(coord.x.toFixed(2));
      $('#coordy').val(coord.y.toFixed(2));
    });
  }

  function addLayers(map, rc) {
    // add layer control object
    var cities = layerMarkers(window.markers.cities, "cities", 3, map, rc);
    var capitals = layerMarkers(window.markers.capitals, "capitals", 6, map, rc);
    var towns = layerMarkers(window.markers.towns, "towns", 2, map, rc);
    var landmarks = layerLandmarks(window.markers.landmarks, map, rc);
    var poi = layerPoi(window.markers.poi, map, rc);

    L.control.layers({}, {
      'Polygon': layerPolygon(map, rc),
      'Countries': layerCountries(map, rc),
      'Bounds': layerBounds(map, rc),
      'Capitals': capitals,
      'Cities': cities,
      'Towns': towns,
      "Landmarks": landmarks,
      "Points of Interest": poi
    }).addTo(map)

    map.on('zoomend', function () {
      var zoom = map.getZoom();

      if (zoom < 7) {
        map.removeLayer(poi);
      } else {
        map.addLayer(poi);
      }

      if (zoom < 4) {
        map.removeLayer(towns);
        map.removeLayer(landmarks);
      } else {
        map.addLayer(towns);
        map.addLayer(landmarks);
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

  function layerLandmarks(obj, map, rc) {
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
          className: "landmarks",
          radius: 3
        }).bindTooltip(label, { permanent: true, opacity: 0.7, direction: "center", className: "landmark-marker" }).openTooltip();
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
          shape: "diamond",
          radius: 1
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

      var content = '<b>' + feature.properties.name + '</b>' + '<p>' + description + '</p>';
      if (feature.properties.wa_link && feature.properties.wa_link != "") {
        content += '<a href="' + feature.properties.wa_link + '">World Anvil</a>';
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

  $('#editorForm').submit(function (e) {
    var name = $("#name").val();
    var type = $("#type").val();
    var coordx = $("#coordx").val();
    var coordy = $("#coordy").val();
    var short_description = $("#short_description").val();
    var wa_link = $("#wa_link").val();

    if (!name || !type || !coordx || !coordy) {
      alert("Missing a required value.");
    } else {
      var newPoint = {
        "type": "Feature",
        "properties": {
          "name": name,
          "short_description": short_description,
          "wa_link": wa_link
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            Number(coordx),
            Number(coordy)
          ]
        }
      }

      if (type === "Country") window.markers.countries.push(newPoint);
      else if (type === "Capital") window.markers.capitals.push(newPoint);
      else if (type === "City") window.markers.cities.push(newPoint);
      else if (type === "Town") window.markers.towns.push(newPoint);
      else if (type === "Landmark") window.markers.landmarks.push(newPoint);
      else if (type === "POI") window.markers.poi.push(newPoint);

      // Reset map div and re-init
      $("#map").replaceWith('<div id="map"></div>');
      $('#output').val(JSON.stringify(window.markers));
      init('map');
    }
    e.preventDefault();
    return false;
  });

  init('map')
}(window))
