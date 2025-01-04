import { Controller, Body, Res, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor (private readonly authServices: AuthService) {}

  @Post()
  async login(@Body('accessCode') accessCode: string, @Res() res: Response) {
    const token = await this.authServices.verifyAccessCode(accessCode);

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600 * 1000,
    };

    res.cookie('authToken', token, cookieOptions);

    return res.status(200).json({ message: 'Login successful' });
  }
}
