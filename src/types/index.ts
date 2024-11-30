export type ServiceRequestStatus = 'pending' | 'in-progress' | 'resolved';

export interface ServiceRequest {
  id: string;
  type: string;
  description: string;
  status: ServiceRequestStatus;
  createdAt: string;
  resolvedAt?: string;
  attachments?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  accountNumber: string;
}