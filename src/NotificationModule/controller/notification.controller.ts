import { Controller, Get, Param } from '@nestjs/common';
import { Constants } from '../../CommonsModule/constants';
import { Notification } from '../entity/notification.entity';
import { NotificationService } from '../service/notification.service';

@Controller(
  `${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${Constants.NOTIFICATION_ENDPOINT}`,
)
export class NotificationController {
  constructor(private readonly service: NotificationService) {}

  @Get('/:id')
  public async findNotificationById(
    @Param('id') id: string,
  ): Promise<Notification> {
    return this.service.findNotificationById(id);
  }

  @Get('/user/:userId')
  public async getNotificationsByUserId(
    @Param('userId') userId: string,
  ): Promise<Notification[]> {
    return this.service.getNotificationsByUserId(userId);
  }
}