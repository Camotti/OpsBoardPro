export interface LoginRequestDto 
{
    username: string;
    password: string;
    mfaCode?: string;
}