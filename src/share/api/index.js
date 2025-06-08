import axios from "axios";
import tokenUtils from "../utils/tokenUtils";

const api = axios.create({
  baseURL: "http://26.9.175.39:8888/api/v1",
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  const token = tokenUtils.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const API_PREFIX = {
  auth: "/auth",
  order: "/order",
  tracking: "/tracking",
  delivery: "/delivery",
};

export const authApi = {
  login: (credentials) => {
    return api.post(`${API_PREFIX.auth}/auth/login`, credentials);
  },

  register: (credentials) => {
    const { confirmPassword, ...payload } = credentials;
    return api.post(`${API_PREFIX.auth}/auth/register/customer`, payload);
  },

  verifyAccount: (token) => {
    return api.patch(`${API_PREFIX.auth}/auth/verify-email/${token}`);
  },

  getMe: () => {
    return api.get(`${API_PREFIX.auth}/user/my-info`);
  },
};

export const orderApi = {
  createOrder: (payload) => {
    return api.post(`${API_PREFIX.order}/order/create`, payload);
  },

  getCustomerOrder: (queryString) => {

    return api.get(
      `${API_PREFIX.order}/order/filter/customer?${queryString}`,
    );
  },

  getAdminOrder: (queryString) => {
    return api.get(
      `${API_PREFIX.order}/order/filter/admin?${queryString}`,
    );
  },
};

export const trackingApi = {
  getOrderDetail: (orderCode) => {
    return api.get(
      `${API_PREFIX.tracking}/tracking/order/details?orderCode=${orderCode}`,
    );
  },
  
  getOrderDetailPublic: (orderCode, phone) => {
    return api.get(
      `${API_PREFIX.tracking}/tracking/public/order/details?orderCode=${orderCode}&phone=${phone}`,
    );
  }
};

export const deliveryApi = {
  updateOrderStatus: (payload) => {
    return api.patch(`${API_PREFIX.delivery}/delivery-order/update-status`, {...payload})
  },

  getDrivers: () => {
    return api.get(`${API_PREFIX.auth}/delivery-staff/find-delivery-staff/true`)
  }
}

export const thirdPartyApi = {
  getDistricts: () => {
    return axios.get(`https://provinces.open-api.vn/api/p/01?depth=3`);
  },
};
