import { KrxClient } from '../../../core/KrxClient';
import { API_CATEGORY, API_ID } from '../../../core/constants';
import { StockBaseInfo } from '../stock.types';

/**
 * 코넥스 종목기본정보 API
 * API ID: knx_isu_base_info
 */
export class KnxBaseInfoApi {
  private readonly apiId = API_ID.STOCK.KNX_BASE_INFO;

  constructor(private readonly client: KrxClient) {}

  /**
   * 코넥스 종목기본정보를 조회합니다.
   * @param params 조회 파라미터
   * @returns 종목기본정보 배열
   */
  fetch(params: Record<string, string> = {}): Promise<StockBaseInfo[]> {
    return this.client.get<StockBaseInfo>(API_CATEGORY.STOCK, this.apiId, params);
  }
}
