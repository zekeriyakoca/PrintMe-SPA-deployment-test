import { LogLevel } from "@azure/msal-browser";
import { Configuration } from '@azure/msal-browser';


export const msalConfig: Configuration = {
    auth: {
        clientId: '*****',//process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID as string,
        authority: "https://login.microsoftonline.com/"+'*****',//process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID,
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
    scopes: ["api://*****/PrintMe.User"],
};
