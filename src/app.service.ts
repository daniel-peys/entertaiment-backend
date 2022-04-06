import { Injectable } from '@nestjs/common';
import { AuthDto } from './auth/dto';
import { PrismaService } from './prisma/prisma/prisma.service';
import { data, dataDto } from './data';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  async loadData(token: AuthDto): Promise<dataDto[]> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: token.email,
      },
    });

    return {
      ...{ bookmarks: user.bookmarks },
      ...data,
    };
  }
}
