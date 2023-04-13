;(function (window) {
  // geoJson definitions
  window.countries = [{
    type: 'Feature',
    properties: {
      name: 'The Iron Empire'
    },
    geometry: {
      type: 'Point',
      coordinates: [430, 812]
    }
  },
  {
    type: 'Feature',
    properties: {
      name: 'The Fey Lands'
    },
    geometry: {
      type: 'Point',
      coordinates: [893, 771]
    }
  },
  {
    type: 'Feature',
    properties: {
      name: 'The Baronies'
    },
    geometry: {
      type: 'Point',
      coordinates: [848, 992]
    }
  }]

  window.geoInfo = [
    {
      'type': 'Feature',
      'properties': {
        'name': 'Ravenport'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [430, 939]
      }
    }
  ]

  // polygon
  window.polygon = []
}(window))
