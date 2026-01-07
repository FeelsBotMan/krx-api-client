import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { SrDailyTrade } from "../stock.types";

/**
 * 신주인수권증서 일별매매정보 API
 * API ID: sr_bydd_trd
 */
export class SrDailyTradeApi {
  private readonly apiId = API_ID.STOCK.SR_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * 신주인수권증서 일별매매정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 신주인수권증서 일별매매정보 배열
   */
  fetch(params: { basDd: string }): Promise<SrDailyTrade[]> {
    return this.client.get<SrDailyTrade>(API_CATEGORY.STOCK, this.apiId, {
      basDd: params.basDd,
    });
  }
}
