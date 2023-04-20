; (function (window) {
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
  },
  {
    type: 'Feature',
    properties: {
      name: 'Barbrion'
    },
    geometry: {
      type: 'Point',
      coordinates: [518, 726]
    }
  },
  {
    type: 'Feature',
    properties: {
      name: 'The Rust Marshes'
    },
    geometry: {
      type: 'Point',
      coordinates: [648, 781]
    }
  },
  {
    type: 'Feature',
    properties: {
      name: 'The Elder Heart Woods'
    },
    geometry: {
      type: 'Point',
      coordinates: [987, 864]
    }
  },
  {
    type: 'Feature',
    properties: {
      name: 'The Sunken Marshes'
    },
    geometry: {
      type: 'Point',
      coordinates: [650, 1109]
    }
  }]

  window.capitals = [
    {
      "type": "Feature",
      "properties": {
        "name": "Vars"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          809,
          1066
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Oldport"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          871,
          851
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Glyswenn"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          977,
          777
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Capitol"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          320,
          859
        ]
      }
    }
  ]

window.towns = [
  {
    "type": "Feature",
    "properties": {
      "name": "Eckenpont"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        756,
        648
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Pallipont"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        821,
        617
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Allinpal"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        440,
        788
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jangleton"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        242,
        941
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Docktown"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        261,
        807
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Faretal"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        736,
        1021
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Trabbietown"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        840,
        819
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Hallyton"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        718,
        980
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Bamberer"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        749,
        1068
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Vilton"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        792,
        962
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Marayton"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        617,
        1150
      ]
    }
  }
]

  window.cities = [
    {
      "type": "Feature",
      "properties": {
        "name": "Ravenport"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          442,
          970
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Velteth"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          388,
          902
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "The Empire's Second"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          327,
          927
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "The Iron Heart"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          274,
          888
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "The Arcane Eye"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          349,
          795
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Seabreath"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          539,
          675
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Saltwind"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          512,
          638
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Glause"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          422,
          654
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Oakwood Port"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          250,
          721
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Vulda"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          717,
          808
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Dracken"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          786,
          854
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Vaneer"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          876,
          832
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Burksaal"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          711,
          667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Talpont"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          890,
          617
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Carnfahr"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          857,
          773
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Abertyl"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          970,
          745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Twlch Evann"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1019,
          752
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Quailton"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          890,
          870
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "The Heart of the Forest"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          928,
          895
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Lisbonn"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          996,
          898
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Tandymarsh"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          565,
          1070
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Bullwug Bulge"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          510,
          1189
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Garleytown"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          563,
          1201
        ]
      }
    }
  ]

  // polygon
  window.polygon = []
}(window))
