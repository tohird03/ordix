type AuthBridge = {
  getToken: () => string | undefined;
  onUnauthorized: () => void;
};

let bridge: AuthBridge = {
  getToken: () => undefined,
  onUnauthorized: () => {},
};

export const setAuthBridge = (value: AuthBridge) => {
  bridge = value;
};

export const getAuthBridge = () => bridge;
