/* global L */
; (function (window) {
  function init(mapid) {
    var minZoom = 0
    var maxZoom = 7
    var img = [
      2048, // original width of image
      1536  // original height of image
    ]

    // create the map
    var map = L.map(mapid, {
      minZoom: minZoom,
      maxZoom: maxZoom,
      center: [0,0]
    })

    // assign map and image dimensions
    var rc = new L.RasterCoords(map, img)

    // set the view on a marker ...
    map.setView(rc.unproject([0, 0]), 4)

    // add layer control object
    L.control.layers({}, {
      'Polygon': layerPolygon(map, rc),
      'Countries': layerCountries(map, rc),
      'Bounds': layerBounds(map, rc, img),
      'Info': layerGeo(map, rc)
    }).addTo(map)

    var imageBounds = [
      [-1000, -1000],
      [1000, 1000]
    ];

    L.imageOverlay("mapoverview.svg", imageBounds).addTo(map)
  }

  /**
   * layer with markers
   */
  function layerBounds(map, rc, img) {
    var layerBounds = L.layerGroup([])
    map.addLayer(layerBounds)

    return layerBounds
  }

  /**
   * layer using geoJson data for countries adding a circle marker
   */
  function layerCountries(map, rc) {
    var layerCountries = L.geoJson(window.countries, {
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

  /**
   * layer with markers
   */
  function layerGeo(map, rc) {
    var layerGeo = L.geoJson(window.geoInfo, {
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
        label = String(feature.properties.name) // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
        return new L.CircleMarker(latlng, {
          radius: 1
        }).bindTooltip(label, { permanent: true, opacity: 0.7, direction: "center", className: "place-marker" }).openTooltip();
      }
    })
    map.addLayer(layerGeo)
    return layerGeo
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
