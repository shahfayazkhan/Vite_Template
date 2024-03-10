type ApiEndpointsType = {
  [key: string]: {
    method: 'POST' | 'DELETE' | 'GET' | 'PUT';
    url: string;
  };
};

export const ApiEndpoints: ApiEndpointsType = {
  LOGIN_USER: {
    method: 'POST',
    url: '/abc/login',
  },
};
