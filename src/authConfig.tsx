import { LogLevel } from "@azure/msal-browser";
import { Configuration } from '@azure/msal-browser';


export const msalConfig: Configuration = {
    auth: {
        clientId: '7f06f67b-f0a6-4361-9cf5-e3cc3796d7cb',//process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID as string,
        authority: "https://login.microsoftonline.com/"+'95090b01-7b00-476f-8a70-c6820af4a2d1',//process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID,
        redirectUri: 'http://localhost:3000'// process.env.NEXT_PUBLIC_AZURE_AD_REDIRECT_URI,
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            logLevel: LogLevel.Info,
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

export const loginRequest = {
    scopes: ["openid", "profile"],
};

export const tokenRequest = {
    scopes: ["api://69ee91f6-1875-4423-a144-36c3e4b85a85/PrintMe.User"],
};
