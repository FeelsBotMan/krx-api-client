import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { ElwDailyTrade } from "../security.types";

/**
 * ELW 일별매매정보 API
 * API ID: elw_bydd_trd
 */
export class ElwDailyTradeApi {
  private readonly apiId = API_ID.SECURITY.ELW_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * ELW 일별매매정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns ELW 일별매매정보 배열
   */
  fetch(params: { basDd: string }): Promise<ElwDailyTrade[]> {
    return this.client.get<ElwDailyTrade>(API_CATEGORY.SECURITY, this.apiId, {
      BAS_DD: params.basDd,
    });
  }
}
