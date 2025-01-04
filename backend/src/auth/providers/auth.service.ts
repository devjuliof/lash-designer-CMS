import { BadRequestException,  Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor (private readonly jwtService: JwtService) {}

  public async verifyAccessCode(accessCode: string) {
    const isAccessCodeValid = accessCode === process.env.ACCESS_CODE;

    if (!isAccessCodeValid) {
      throw new BadRequestException('Access code is incorrect.');
    }

    const token = await this.jwtService.signAsync({});

    return token;
  }
}
