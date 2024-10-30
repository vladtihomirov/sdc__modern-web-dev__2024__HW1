import { useState, useEffect, useCallback } from 'react';
import axios, {AxiosError} from 'axios';
import {ELocalStorageKeys} from "../@types/ELocalStorageKeys.ts";
import {IApiLog} from "../@types/IAPILog.ts";


export const useFetch = <T>(url: string, fallback: T, method: string = 'GET', body?: object) => {
  const [data, setData] = useState<T>(fallback);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const saveLog = (log: IApiLog) => {
    const logs = JSON.parse(localStorage.getItem(ELocalStorageKeys.LOGS) ?? '[]') as IApiLog[];
    logs.push(log);
    localStorage.setItem(ELocalStorageKeys.LOGS, JSON.stringify(logs));
  }

  const fetchData = useCallback(async () => {
    const log: IApiLog = {url, requestBody: body || null, responseStatus: '', method};
    setLoading(true);

    return axios({url, method}).then(response => {
      log.responseStatus = response.status;
      setData(response.data);
    }).catch(e => {
      const err = e as AxiosError;
      setError(err.message);
      log.responseStatus = err.response ? err.response.status : 'Network error';
    }).finally(() => {
      setLoading(false);
      saveLog(log);
    });
  }, [url, method, body]);

  useEffect(() => {
    fetchData().then(r => r);
  }, [fetchData]);

  return {data, error, loading};
}

export const useGetData = <T>(url: string, fallback: T) => {
  const baseUrl: string = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/';
  return useFetch<T>(baseUrl + url, fallback, 'GET');
}

export const useJSONData = <T>(url: string, fallback: T) => {
  const baseUrl: string = '/data/';
  return useFetch<T>(baseUrl + url + '.json', fallback, 'GET');
}
