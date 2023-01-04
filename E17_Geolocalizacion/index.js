let markers = [], map;

function initMap() {
  const posicion = {
    lat: -34.0000000,
    lng: -64.0000000,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: -34.0000000,
        lng: -64.0000000,
      },
      map,
      title: "Argentina",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -14.235004,
        lng: -51.92528,
      },
      map,
      title: "Brasil",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat:  -27.36708,
        lng: -55.89608,
      },
      map,
      title: "Mi ciudad",
    })
  );
}