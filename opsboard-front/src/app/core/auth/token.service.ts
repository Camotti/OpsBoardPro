import { Injectable } from "@angular/core";
import { APP_CONFIG } from "../config/app-config";

@Injectable({ providedIn: 'root'})
export class TokenService {

    getTokens() {
        const raw = localStorage.getItem(APP_CONFIG.tokenStorageKey);
        return raw ? JSON.parse(raw) : null
    }

    setTokens(tokens: unknown) {
        localStorage.setItem(
            APP_CONFIG.tokenStorageKey, JSON.stringify(tokens)
        );
    }

    clear() {
        localStorage.removeItem(APP_CONFIG.tokenStorageKey);
    }

    hasValidToken(): Boolean {
        return !!this.getTokens();
    }
}