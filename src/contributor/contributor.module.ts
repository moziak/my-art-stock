import { OrderService } from 'src/order/order.service';
import { OrderModule } from './../order/order.module';
import { ProductModule } from './../product/product.module';
import { ProductService } from './../product/product.service';
import { UsersModule } from './../users/users.module';
import { Contributor } from './../core/entities/contributor';
import { Module } from '@nestjs/common';
import { ContributorService } from './contributor.service';
import { ContributorController } from './contributor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/entities/users';
import EncryptionHelperService from 'src/core/utils/EncryptionHelperService';
import { AuthService } from 'src/auth/auth.service';
import '../core/profiles/contributor.profile';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Contributor]),
    ProductModule,
    UsersModule,
    //OrderModule,
    JwtModule.register({
      secret: 'jwtConstants.secret',
      signOptions: { expiresIn: process.env.JWT_EXPIRY_TIME },
    }),
  ],
  providers: [
    ContributorService,
    EncryptionHelperService,
    AuthService,
    ProductService,
    //OrderService,
  ],
  controllers: [ContributorController],
  exports: [ContributorService, TypeOrmModule],
})
export class ContributorModule {}
