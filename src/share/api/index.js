import axios from "axios";
import accountType from "../constants/accountType";

const api = axios.create({
  baseURL: "http://26.9.175.39:8888/api/v1",
  withCredentials: false,
});

export const authApi = {
  login: (credentials) => {
    return api.post(`/auth/login`, credentials);
  },

  register: (credentials) => {
    const {
      accountType: _accountType,
      confirmPassword,
      ...payload
    } = credentials;

    if (_accountType == accountType.DELIVERY_STAFF) {
      return api.post(`/auth/register/deliverystaff`, payload);
    }
    if (_accountType == accountType.CUSTOMER) {
      return api.post(`/auth/register/customer`, payload);
    }
  },

  verifyAccount: (token) => {
    return api.patch(`/auth/verify-email/${token}`);
  },
};

export const thirdPartyApi = {
  getDistricts: () => {
    return api.get(`https://provinces.open-api.vn/api/p/01?depth=3`, {
      withCredentials: false,
    });
  },
};
