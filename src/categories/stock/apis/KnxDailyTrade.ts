import { KrxClient } from '../../../core/KrxClient';
import { API_CATEGORY, API_ID } from '../../../core/constants';
import { StockDailyTrade } from '../stock.types';

/**
 * 코넥스 일별매매정보 API
 * API ID: knx_bydd_trd
 */
export class KnxDailyTradeApi {
  private readonly apiId = API_ID.STOCK.KNX_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * 코넥스 일별매매정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 일별매매정보 배열
   */
  fetch(params: { basDd: string }): Promise<StockDailyTrade[]> {
    return this.client.get<StockDailyTrade>(API_CATEGORY.STOCK, this.apiId, {
      BAS_DD: params.basDd,
    });
  }
}
