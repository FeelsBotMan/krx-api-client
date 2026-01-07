/**
 * KRX Open API 공통 타입 정의
 */

export interface KrxClientOptions {
  serviceKey: string;
  baseUrl?: string;
  authKey?: string;
}

export interface KrxApiResponse<T> {
  OutBlock_1?: T[];
  [key: string]: unknown;
}
