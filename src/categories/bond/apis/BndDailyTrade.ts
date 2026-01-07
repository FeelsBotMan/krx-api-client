import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { BondDailyTrade } from "../bond.types";

/**
 * 일반채권시장 일별매매정보 API
 * API ID: bnd_bydd_trd
 */
export class BndDailyTradeApi {
  private readonly apiId = API_ID.BOND.BND_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * 일반채권시장 일별매매정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 일별매매정보 배열
   */
  fetch(params: { basDd: string }): Promise<BondDailyTrade[]> {
    return this.client.get<BondDailyTrade>(API_CATEGORY.BOND, this.apiId, {
      basDd: params.basDd,
    });
  }
}
