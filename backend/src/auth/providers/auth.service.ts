import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor (private readonly jwtService: JwtService) {}

  public async verifyAccessCode(accessCode: string) {
    const isAccessCodeValid = accessCode === process.env.ACCESS_CODE;

    if (!isAccessCodeValid) {
      throw new HttpException('Access code incorrect.', HttpStatus.BAD_REQUEST);
    }

    const payload = {};
    return await this.jwtService.signAsync(payload);
  }
}
