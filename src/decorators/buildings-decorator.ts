import {IsUUID, IsString, IsBoolean, IsEmail, IsNumber, IsOptional} from 'class-validator';

export class OfficeLocation {
    @IsString()
    companyName?: string;

    @IsBoolean()
    isPreferred?: boolean;

    @IsUUID()
    id?: string;

    @IsString()
    name?: string;

    @IsUUID()
    companyId?: string;

    @IsNumber()
    timeZoneShift?: number;

    @IsString()
    description?: string;

    @IsString()
    path?: string;

    @IsEmail()
    contacts?: string;

    @IsString()
    station?: string;

    @IsString()
    address?: string;

    @IsString()
    city?: string;

    @IsNumber()
    latitude?: number;

    @IsNumber()
    longitude?: number;

    @IsBoolean()
    isFavorite?: boolean;

    @IsNumber()
    index?: number;

    @IsString()
    code?: string;

    @IsBoolean()
    whitelistEnabled?: boolean;

    constructor(data: Partial<OfficeLocation>) {
        Object.assign(this, data);
    }
}

export class OfficeLocationsResponse {
    @IsNumber()
    totalCount?: number;

    @IsOptional()
    rows?: OfficeLocation[];

    constructor(data: Partial<OfficeLocationsResponse>) {
        Object.assign(this, data);
    }
}

