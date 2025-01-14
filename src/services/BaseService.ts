import {useMemo, useState} from "react";
import {ELocalStorageKeys} from "../@types/ELocalStorageKeys.ts";

export type Response<T> = {
  data: T;
  loading: boolean;
  error: string | null;
}

type TypesEqual<A, B> = A extends B ? (B extends A ? true : false) : false;

export class BaseService {
  private static readonly baseUrl: string = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/';

  protected static useFetch = <ApiResponse extends object, ReturnType extends object>(
    url: string,
    options: RequestInit,
    initialValue: ReturnType,
    mutateData?: (data: ApiResponse) => ReturnType
  ): [Response<ReturnType>, () => void] => {
    const [data, setData] = useState<ReturnType>(initialValue);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const memoizedOptions = useMemo(() => options, [options]);

    const run = () => {
      executeRequest();
    }

    const executeRequest = async () => {
      try {
        const requestPayload = memoizedOptions.body ? JSON.stringify(memoizedOptions.body) : null;
        const response = await fetch(this.baseUrl + url, memoizedOptions);
        const responseData = await response.json() as ApiResponse;

        const logs = JSON.stringify([...JSON.parse(localStorage.getItem(ELocalStorageKeys.API_LOGS) ?? '[]'), {
          url: this.baseUrl + url,
          requestBody: requestPayload,
          responseStatus: response.status,
          responseData: responseData,
        }]);

        try {
          localStorage.setItem(ELocalStorageKeys.API_LOGS, logs);
        } catch (e) {
          console.error('Failed to save logs to local storage:', e, '\n', 'clearing logs...');
          localStorage.removeItem(ELocalStorageKeys.API_LOGS);
          localStorage.setItem(ELocalStorageKeys.API_LOGS, logs);
        }

        if (response.ok) {
          if(mutateData) {
            setData(mutateData(responseData));
          } else if (true as TypesEqual<ApiResponse, ReturnType>) {
            setData(responseData as unknown as ReturnType);
          } else {
            console.error(
              'mutateData is required when ApiResponse and ReturnType differ.',
            );
            setError(
              'Failed to process the response: incompatible types between ApiResponse and ReturnType',
            );
          }
        } else {
          setError(`Error: ${response.status.toFixed(0).toString()}`);
        }
      } catch (err) {
        console.error('Fetch Error:', err);
        setError((err as Error).message || 'An error occurred');
        setData(initialValue);
      } finally {
        setLoading(false);
      }
    };


    return [{data, loading, error}, run];
  };

}