const tokenUtils = {
  getAccessToken: () => {
    return localStorage.getItem("access-token") || null;
  },

  setAccessToken: (token) => {
    localStorage.set("access-token", token);
  },

  clearAccessToken: () => {
    localStorage.removeItem("access-token");
  },
};

export default tokenUtils;
