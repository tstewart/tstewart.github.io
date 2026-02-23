populateTable("countries", window.markers.countries);
populateTable("capitals", window.markers.capitals);
populateTable("cities", window.markers.cities);
populateTable("towns", window.markers.towns);
populateTable("landmarks", window.markers.landmarks);
populateTable("poi", window.markers.poi);

function populateTable(id, obj) {
    var table = $("#"+id+" tbody")
    $.each(obj, function(idx, elem) {
        var name = elem.properties.name;
        var coords = elem.geometry.coordinates;
        var short_description = elem.properties.short_description||"";
        var wa_link = elem.properties.wa_link||"";

        table.append("<tr><td>"+name+"</td><td>"+coords+"</td><td>"+short_description+"</td><td>"+wa_link+"</td></tr>");
    });
}

$('#editorForm').submit(function (e) {
    var name = $("#name").val();
    var type = $("#type").val();
    var coordx = $("#coordx").val();
    var coordy = $("#coordy").val();
    var short_description = $("#short_description").val();
    var wa_link = $("#wa_link").val();

    if(!name || !type || !coordx || !coordy) {
        alert("Missing a required value.");
    } else {
        var newPoint = {
            "type": "Feature",
            "properties": {
              "name": name,
              "short_description":short_description,
              "wa_link":wa_link
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                Number(coordx),
                Number(coordy)
              ]
            }
          }
          if(type === "Country") window.markers.countries.push(newPoint);
          else if(type === "Capital") window.markers.capitals.push(newPoint);
          else if(type === "City") window.markers.cities.push(newPoint);
          else if(type === "Town") window.markers.towns.push(newPoint);
          else if(type === "Landmark") window.markers.landmarks.push(newPoint);
          else if(type === "POI") window.markers.poi.push(newPoint);
    }
    e.preventDefault();
    return false;
});

function exportData(e) {
    var exportTextArea = $("#export");
    exportTextArea.val(JSON.stringify(window.markers));
}