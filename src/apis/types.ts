export interface GeolocationData {
  data: {
    location: {
      city: {
        name: string;
      };
      country: {
        name: string;
      };
      latitude: number;
      longitude: number;
    };
    timezone: {
      id: string;
    };
  };
}

export interface SolarData {
  results: {
    sunrise: string;
    sunset: string;
  };
}

