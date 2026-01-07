import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { FutDailyTrade } from "../derivative.types";

/**
 * 주식선물(유가) 일별매매정보 API
 * API ID: eqsfu_stk_bydd_trd
 */
export class EqsfuStkDailyTradeApi {
  private readonly apiId = API_ID.DERIVATIVE.EQSFU_STK_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * 주식선물(유가) 일별매매정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 선물 일별매매정보 배열
   */
  fetch(params: { basDd: string }): Promise<FutDailyTrade[]> {
    return this.client.get<FutDailyTrade>(API_CATEGORY.DERIVATIVE, this.apiId, {
      basDd: params.basDd,
    });
  }
}
