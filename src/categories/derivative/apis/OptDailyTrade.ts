import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { OptDailyTrade } from "../derivative.types";

/**
 * 옵션 일별매매정보 (주식옵션外) API
 * API ID: opt_bydd_trd
 */
export class OptDailyTradeApi {
  private readonly apiId = API_ID.DERIVATIVE.OPT_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * 옵션 일별매매정보를 조회합니다.
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
