export interface User {
  id: number;
  username: string;
  role: 'ADMIN' | 'USER' | 'EXECUTIVE' | 'ASSESSOR';
  organizationName: string;
  avatarUrl?: string;
}