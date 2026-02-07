import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";
import { AuthUser, AuthToken } from "../models";

interface AuthState 
{
    user: AuthUser | null;
    tokens: AuthToken | null;
    loading: boolean;
}

export const AuthStore = signalStore(
    {providedIn: 'root' },
    withState<AuthState>({
        user: null,
        tokens: null,
        loading: false,
    }),
    withMethods((store) => ({
        loginSuccess(user: AuthUser, tokens: AuthToken) {
            patchState(store,{
                user,
                tokens,
                loading: false,
            });
        },
        logout(){
            patchState(store,{
                user: null,
                tokens: null,
                loading: false, 
            });
        },
    }))
); 