const useToken = () => {
    const getToken = () => localStorage.getItem('token') || '';
    const getRecovery = () => localStorage.getItem('tokenRecovery') || '';
    const resetToken = () => localStorage.setItem('token', '');
    const resetRecoveryToken = () => localStorage.setItem('tokenRecovery', '');
    const setToken = (token: string | null) => localStorage.setItem('token', token || '');
    const setRecoveryToken = (tokenRecovery: string | null ) => localStorage.setItem('tokenRecovery', tokenRecovery || '');

    return {getToken, getRecovery, resetToken, setRecoveryToken, resetRecoveryToken, setToken};
}

export default useToken;
