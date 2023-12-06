import {
    IsEmail,
    IsPhoneNumber,
    IsEnum,
    IsOptional,
    IsArray,
    IsDateString,
} from 'class-validator';

export class UserDetails {
    @IsEmail()
    email?: string;

    @IsPhoneNumber("RU", {each: true})
    phone?: string;

    @IsEnum(['ru', 'en'])
    phoneCountryCode?: string;

    @IsOptional()
    position?: string | null;

    @IsOptional()
    departmentName?: string;

    @IsOptional()
    avatar?: string;

    @IsOptional()
    preferredLanguage?: number;

}

export class ScheduleEntry  {
    @IsDateString()
    from?: string;

    @IsDateString()
    to?: string;
}


export class BookingDetails {
    @IsDateString()
    from?: string;

    @IsDateString()
    to?: string;

    @IsDateString()
    cancelationAtTime?: string;

    @IsArray({each: true})
    @IsEnum(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'])
    schedule?: ScheduleEntry[];

    @IsOptional()
    maxBookingLength?: number;
}

export class BookingRequest {
    @IsOptional()
    userDetails?: UserDetails;

    @IsOptional()
    workplaceName?: string;

    @IsOptional()
    comment?: string | null;

    @IsOptional()
    attributes?: any[];

    @IsOptional()
    bookingDetails?: BookingDetails;

    constructor(data: Partial<BookingRequest>) {
        Object.assign(this, data);

    }
}