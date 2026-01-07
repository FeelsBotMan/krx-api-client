import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { OilDailyTrade } from "../product.types";

/**
 * 석유시장 일별매매정보 API
 * API ID: oil_bydd_trd
 */
export class OilDailyTradeApi {
  private readonly apiId = API_ID.PRODUCT.OIL_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * 석유시장 일별매매정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 석유시장 일별매매정보 배열
   */
  fetch(params: { basDd: string }): Promise<OilDailyTrade[]> {
    return this.client.get<OilDailyTrade>(API_CATEGORY.PRODUCT, this.apiId, {
      basDd: params.basDd,
    });
  }
}
