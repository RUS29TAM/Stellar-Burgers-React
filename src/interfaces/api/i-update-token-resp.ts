export interface IUpdateTokenResp {
    success: boolean,
    accessToken: string,
    refreshToken: string,
    user: { email: string, name: string },
}
