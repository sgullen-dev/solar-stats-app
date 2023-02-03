// Third Party
import { useQuery } from 'react-query';

// Internal
import SolarData from './solar-data.type';
import { BasePath, SolarDataEP } from '../ep-config';

// Custom React-Query hook for getting sunrise / sunset data from a longitude and latitude
// ------
// queryKey note: By using the ip address in the query key, we can avoid unnecessary duplicate
// ip address requests by simply responding with cached data
// options note: The `enabled` option will prevent this request from being called until it is true, which allows
// for chaining requests as documented here: https://tanstack.com/query/v3/docs/react/guides/dependent-queries
export const useGetSolarData = (
  ipAddress: string,
  longitude?: number,
  latitude?: number,
  enabled?: boolean
) => {
  const basePath: string = BasePath.SolarData;
  const endpoint: string = SolarDataEP.Json;
  return useQuery<SolarData, Error>(
    `solar-details-${ipAddress}`,
    async () => {
      // The formatted 0 url param will return an un-formatted date string in UTC we can use to
      // manage our own date displays based on timezone
      const response = await fetch(
        `${basePath}${endpoint}?lat=${latitude}&lng=${longitude}&formatted=0`
      );
      if (!response.ok) {
        throw new Error('Request Failed');
      }
      return response.json();
    },
    { enabled }
  );
};
