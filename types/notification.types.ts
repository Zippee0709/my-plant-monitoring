import { NotificationTypeEnum } from '../enums/NotificationIconEnum';

//
// Notification types
// ===== ===== ===== ===== =====
export type NotificationType = {
  id: string;
  isRead: boolean;
  type: NotificationTypeEnum;
};
