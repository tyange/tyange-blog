export interface CMSResponse<T> {
  status: boolean;
  data: T;
  message: string | null;
}
