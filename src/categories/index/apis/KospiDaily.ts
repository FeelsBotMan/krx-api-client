import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { KrxIndexDaily } from "../index.types";

/**
 * KOSPI 시리즈 일별시세정보 API
 * API ID: kospi_dd_trd
 */
export class KospiDailyApi {
  private readonly apiId = API_ID.INDEX.KOSPI_DAILY;

  constructor(private readonly client: KrxClient) {}

  /**
   * KOSPI 시리즈 일별시세정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 지수 일별시세정보 배열
   */
  fetch(params: { basDd: string }): Promise<KrxIndexDaily[]> {
    return this.client.get<KrxIndexDaily>(API_CATEGORY.INDEX, this.apiId, {
      basDd: params.basDd,
    });
  }
}
