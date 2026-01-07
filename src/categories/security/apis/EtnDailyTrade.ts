import { KrxClient } from '../../../core/KrxClient';
import { API_CATEGORY, API_ID } from '../../../core/constants';
import { EtnDailyTrade } from '../security.types';

/**
 * ETN 일별매매정보 API
 * API ID: etn_bydd_trd
 */
export class EtnDailyTradeApi {
  private readonly apiId = API_ID.SECURITY.ETN_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * ETN 일별매매정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns ETN 일별매매정보 배열
   */
  fetch(params: { basDd: string }): Promise<EtnDailyTrade[]> {
    return this.client.get<EtnDailyTrade>(API_CATEGORY.SECURITY, this.apiId, {
      BAS_DD: params.basDd,
    });
  }
}
