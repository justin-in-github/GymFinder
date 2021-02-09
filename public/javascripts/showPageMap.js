mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: gym.geometry.coordinates,
    zoom: 9
});

new mapboxgl.Marker()
    .setLngLat(gym.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${gym.title}</h3><p>${gym.location}</p>`
            )
    )
    .addTo(map);
