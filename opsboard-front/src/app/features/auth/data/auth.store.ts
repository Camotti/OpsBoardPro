import { signalStore, withState, withMethods } from "@ngrx/signals";
import { AuthUser, AuthTokens } from "../models";

interface AuthState 
{
    user: AuthUser | null;
    tokens: AuthTokens | null;
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
        loginSuccess(user: AuthUser, tokens: AuthTokens) {
            store.user.set(user);
            store.tokens.set(tokens);
            store.loading.set(false);
        },
        logout(){
            store.user.set(null);
            store.tokens.set(null);
        },
    }))
);