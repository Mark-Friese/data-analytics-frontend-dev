export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  page: number;
  totalPages: number;
  totalItems: number;
}