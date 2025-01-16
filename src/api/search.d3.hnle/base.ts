import { SEARCH_API_URL } from "../../constants/constants";

type BaseRequestParams = {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    params?: Record<string, string | number | boolean>;
};

const isEmpty = (value?: Record<any, any>) => !value || Object.keys(value).length === 0;

export const makeRequest = <T>({url, method, params}: BaseRequestParams): Promise<T> => {

    return fetch(`${SEARCH_API_URL}${url}${!isEmpty(params) ? `?${new URLSearchParams(params as any)}` : ''}`, {
        method
    }).then((r) => r.json())
};