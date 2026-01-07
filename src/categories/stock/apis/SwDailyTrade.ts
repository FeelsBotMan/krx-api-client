import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { SwDailyTrade } from "../stock.types";

/**
 * 신주인수권증권 일별매매정보 API
 * API ID: sw_bydd_trd
 */
export class SwDailyTradeApi {
  private readonly apiId = API_ID.STOCK.SW_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * 신주인수권증권 일별매매정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 신주인수권증권 일별매매정보 배열
   */
  fetch(params: { basDd: string }): Promise<SwDailyTrade[]> {
    return this.client.get<SwDailyTrade>(API_CATEGORY.STOCK, this.apiId, {
      BAS_DD: params.basDd,
    });
  }
}
