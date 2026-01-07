import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { OptDailyTrade } from "../derivative.types";

/**
 * 주식옵션(유가) 일별매매정보 API
 * API ID: eqsop_bydd_trd
 */
export class EqsopDailyTradeApi {
  private readonly apiId = API_ID.DERIVATIVE.EQSOP_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * 주식옵션(유가) 일별매매정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 옵션 일별매매정보 배열
   */
  fetch(params: { basDd: string }): Promise<OptDailyTrade[]> {
    return this.client.get<OptDailyTrade>(API_CATEGORY.DERIVATIVE, this.apiId, {
      BAS_DD: params.basDd,
    });
  }
}
