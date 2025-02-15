// src/utils/http/axios.ts

import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

// 创建 Axios 实例
const service = axios.create({
    baseURL: import.meta.env.VITE_GLOB_API_URL, // 使用环境变量中的 API URL
        timeout: 0, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        return response.data; // 返回完整的 response
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * 定义 defHttp 方法，简化请求操作
 */
export const defHttp = {
    get<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
        return service.get<T, R>(config.url!, config);
    },
    post<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig, data?: any): Promise<R> {
        return service.post<T, R>(config.url!, data, config);
    },
};