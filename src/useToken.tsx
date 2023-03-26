import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString: any = localStorage.getItem('UserID');
    const userToken = JSON.parse(tokenString);
    return userToken?.UserID;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any) => {
    if (userToken) {
      localStorage.setItem('token', JSON.stringify(userToken));
      setToken(userToken);
    } else {
      localStorage.clear();
      setToken(null);
    }
  };
  return {
    setToken: saveToken,
    token,
  };
}
