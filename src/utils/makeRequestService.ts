type BaseRequestParams = {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    params?: Record<string, string | number | boolean>;
};

const isEmpty = (value?: Record<any, any>) => !value || Object.keys(value).length === 0;

export const makeRequestService = (baseUrl: string) => <T>({
   url,
   method,
   params
}: BaseRequestParams): Promise<T> => fetch(
    `${baseUrl}${url}${!isEmpty(params) ? `?${new URLSearchParams(params as any)}` : ''}`, {method}
).then(r => r.json());