import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async verifyAccessCode(accessCode: string) {
    const ACESS_CODE = this.configService.get<string>('ACCESS_CODE');

    const isAccessCodeValid = accessCode === ACESS_CODE;

    if (!isAccessCodeValid) {
      throw new BadRequestException('Access code is incorrect.');
    }

    const token = await this.jwtService.signAsync({});

    return token;
  }
}
