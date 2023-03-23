export interface IRegistrationUserResp {
    user: {email: string, name: string},
    accessToken: string,
    refreshToken: string,
    success: boolean,
}
