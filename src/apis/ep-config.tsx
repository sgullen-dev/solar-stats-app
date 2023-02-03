// The endpoint base paths
export enum BasePath {
  Geolocation = 'https://api.ipbase.com/v2',
  SolarData = 'https://api.sunrise-sunset.org',
}

// Individual endpoints
// These are useful to separate from the base path because `nock` needs these
// defined for mocking responses
export enum GeolocationEP {
  Info = '/info',
}
export enum SolarDataEP {
  Json = '/json',
}
