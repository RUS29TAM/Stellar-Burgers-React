export interface ILoginResp {
    success: boolean,
    user: {email: string, name: string},
    accessToken: string,
    refreshToken: string,
}
