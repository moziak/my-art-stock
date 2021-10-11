import { AuthService } from './auth.service';
import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../core/Dtos/authDtos/login-dto';
import { INVALID_CREDENTIAL } from 'src/core/utils/constant/auth-service.constant';

@ApiTags('auths')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: LoginDto })
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    try {
      const user = req.user;
      return await this.authService.login(user);
    } catch (error) {
      if (error.message == INVALID_CREDENTIAL) {
        throw new HttpException(
          {
            status: false,
            message: error.message,
          },
          HttpStatus.UNAUTHORIZED,
        );
      }
    }
  }

  //@UseGuards(LocalAuthGuard)
  /* @Get('/test')
  async test() {
    //const user = req.user;
    try {
      return await this.authService.test();
    } catch (error) {
      throw new HttpException(
        {
          status: false,
          message: error.message,
        },
        400,
      );
    }
  } */
}
