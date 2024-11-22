export function geoLocation() {
    return navigator.geolocation.getCurrentPosition(
      (position) => ({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }),
      () => ({ lat: 0, lon: 0 })
    );
  }
  