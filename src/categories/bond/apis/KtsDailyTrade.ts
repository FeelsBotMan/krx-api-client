import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { KtsDailyTrade } from "../bond.types";

/**
 * 국채전문유통시장 일별매매정보 API
 * API ID: kts_bydd_trd
 */
export class KtsDailyTradeApi {
  private readonly apiId = API_ID.BOND.KTS_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * 국채전문유통시장 일별매매정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 국채전문유통시장 일별매매정보 배열
   */
  fetch(params: { basDd: string }): Promise<KtsDailyTrade[]> {
    return this.client.get<KtsDailyTrade>(API_CATEGORY.BOND, this.apiId, {
      BAS_DD: params.basDd,
    });
  }
}
