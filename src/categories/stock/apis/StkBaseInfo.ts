import { KrxClient } from '../../../core/KrxClient';
import { API_CATEGORY, API_ID } from '../../../core/constants';
import { StockBaseInfo } from '../stock.types';

/**
 * 유가증권 종목기본정보 API
 * API ID: stk_isu_base_info
 */
export class StkBaseInfoApi {
  private readonly apiId = API_ID.STOCK.STK_BASE_INFO;

  constructor(private readonly client: KrxClient) {}

  /**
   * 유가증권 종목기본정보를 조회합니다.
   * @param params 조회 파라미터
   * @returns 종목기본정보 배열
   */
  fetch(params: Record<string, string> = {}): Promise<StockBaseInfo[]> {
    return this.client.get<StockBaseInfo>(API_CATEGORY.STOCK, this.apiId, params);
  }
}
