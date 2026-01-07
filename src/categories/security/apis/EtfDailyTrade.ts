import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { EtfDailyTrade } from "../security.types";

/**
 * ETF 일별매매정보 API
 * API ID: etf_bydd_trd
 */
export class EtfDailyTradeApi {
  private readonly apiId = API_ID.SECURITY.ETF_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * ETF 일별매매정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns ETF 일별매매정보 배열
   */
  fetch(params: { basDd: string }): Promise<EtfDailyTrade[]> {
    return this.client.get<EtfDailyTrade>(API_CATEGORY.SECURITY, this.apiId, {
      basDd: params.basDd,
    });
  }
}
