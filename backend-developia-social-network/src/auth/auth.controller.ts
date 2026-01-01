import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  authService: AuthService

   

  }

  //  @Post()
  //   login(@Body loginRequest: LoginRequest){
  //     authService.login(loginRequest)
      

  //   }
}
