const useToken = () => {
  const getToken = () => localStorage.getItem('token');
  const getRecovery = () => localStorage.getItem('tokenRecovery');
  const resetToken = () => localStorage.setItem('token', null);
  const resetRecoveryToken = () => localStorage.setItem('tokenRecovery', null);
  const setToken = (token) => localStorage.setItem('token', token);
  const setRecoveryToken = (tokenRecovery) => localStorage.setItem('tokenRecovery', tokenRecovery);

  return {getToken, getRecovery, resetToken, setRecoveryToken, resetRecoveryToken, setToken};
}

export default useToken;
