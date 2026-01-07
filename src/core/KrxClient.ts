import { KrxClientOptions, KrxApiResponse } from './types';
import { KrxApiError, KrxClientError } from './errors';

/**
 * KRX Open API 공통 HTTP 클라이언트
 */
export class KrxClient {
  private readonly baseUrl: string;
  private readonly serviceKey: string;
  private readonly authKey: string;

  constructor(options: KrxClientOptions) {
    if (!options.serviceKey) {
      throw new KrxClientError('serviceKey is required');
    }

    // AUTH_KEY는 옵션 또는 환경변수에서 가져옴
    const authKey = options.authKey ?? process.env.AUTH_KEY;
    if (!authKey) {
      throw new KrxClientError('AUTH_KEY is required. Set it in options or AUTH_KEY environment variable.');
    }

    this.baseUrl = options.baseUrl ?? 'https://data-dbg.krx.co.kr';
    this.serviceKey = options.serviceKey;
    this.authKey = authKey;
  }

  /**
   * GET 요청을 수행하고 응답 데이터를 반환합니다.
   * @param category 카테고리 경로 (예: 'idx', 'sto', 'esg')
   * @param apiId API ID (예: 'krx_dd_trd')
   * @param params 쿼리 파라미터
   * @returns API 응답 데이터 배열
   */
  async get<T>(category: string, apiId: string, params: Record<string, string>): Promise<T[]> {
    try {
      const query = new URLSearchParams({
        serviceKey: this.serviceKey,
        ...params,
      });

      const url = `${this.baseUrl}/svc/apis/${category}/${apiId}?${query}`;
      const response = await fetch(url, {
        headers: {
          'AUTH_KEY': this.authKey,
        },
      });

      if (!response.ok) {
        throw new KrxApiError(
          `API request failed with status ${response.status}`,
          response.status
        );
      }

      const json: KrxApiResponse<T> = await response.json();

      // OutBlock_1이 없거나 배열이 아닌 경우 빈 배열 반환
      if (!Array.isArray(json?.OutBlock_1)) {
        return [];
      }

      return json.OutBlock_1;
    } catch (error) {
      if (error instanceof KrxApiError) {
        throw error;
      }

      if (error instanceof Error) {
        throw new KrxClientError(`Request failed: ${error.message}`, error);
      }

      throw new KrxClientError('Unknown error occurred');
    }
  }
}
