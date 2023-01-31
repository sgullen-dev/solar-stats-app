// Third Party
import { useQuery } from "react-query";

// Internal
import { GeolocationData } from "./types";
import { ipBaseKey } from "./api-key";

// Custom React-Query hook for getting geolocation data from an ip address
// ------
// queryKey note: By using the ip address in the query key, we can avoid unnecessary duplicate
// ip address requests by simply responding with cached data
export const useGetGeolocation = (ipAddress: string) => {
  return useQuery<GeolocationData, Error>(
    `geolocation-${ipAddress}`,
    async () => {
      const response = await fetch(
        `https://api.ipbase.com/v2/info?apikey=${ipBaseKey}&ip=${ipAddress}`
      );
      if (!response.ok) {
        throw new Error("Request Failed", { cause: response.status });
      }
      return response.json();
    },
    {
      retry: (failureCount, error) => {
        // Since we are using an api with limited uses, the case can happen
        // where we run out of available requests. This will return a 429 code
        // and there is no need to attempt to retry in this case.
        return error.cause !== 429 && failureCount <= 3;
      },
    }
  );
};
