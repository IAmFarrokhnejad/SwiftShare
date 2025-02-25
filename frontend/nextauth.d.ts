import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
    accessToken: string;
}

declare module "next-auth" {
    interface User {
        token: string;
    }

    interface Session {
        user: ExtendedUser;
    }
}