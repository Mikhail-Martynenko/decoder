import {
    IsUUID,
    IsString,
    IsBoolean,
    IsEmail,
    IsPhoneNumber,
    IsOptional,
    IsNumber,
    ArrayNotEmpty
} from 'class-validator';

export class FullInfoDecoder {
    constructor(data: Partial<FullInfoDecoder> = {}) {
        Object.assign(this, data);
    }

    @IsUUID()
    id?: string;

    @IsString()
    shortName?: string;

    @IsString()
    lastName?: string;

    @IsString()
    firstName?: string;

    @IsOptional()
    @IsString()
    patronymic?: string;

    @ArrayNotEmpty()
    @IsUUID( undefined, { each: true })
    permissionsIds?: string[];

    @IsUUID()
    roleId?: string;

    @IsString()
    roleName?: string;

    @IsBoolean()
    copyMessagesToEmail?: boolean;

    @IsBoolean()
    copyNotificationsToEmail?: boolean;

    @IsUUID()
    companyId?: string;

    @IsOptional()
    @IsUUID()
    departmentId?: string | null;

    @IsOptional()
    @IsString()
    companyName?: string;

    @IsOptional()
    @IsString()
    departmentName?: string;

    @IsPhoneNumber('RU')
    phone?: string;

    @IsString()
    @IsOptional()
    phoneCountryCode?: string;

    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    position?: null;

    @IsBoolean()
    isAdmin?: boolean;

    @IsString()
    avatar?: string;

    @IsNumber()
    preferredLanguage?: number;
}


