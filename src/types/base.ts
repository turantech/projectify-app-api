export enum Roles {
    TEAM_MEMBER = 'teamMember',
    ADMIN = 'admin',
}

type AdminId = string;

export interface RequestUser {
    id: string;
    role: Roles;
    belongsTo?: AdminId;
}
export interface EmptyParams {}
export interface EmptyQuery {}
export interface EmptyBody {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ResBody = any;

export interface ErrorResponse {
    success: boolean;
    statusCode: number;
    message: string;
    isOperational: boolean;
    details?: object;
}
