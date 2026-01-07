import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { StockBaseInfo } from "../stock.types";

/**
 * 코스닥 종목기본정보 API
 * API ID: ksq_isu_base_info
 */
export class KsqBaseInfoApi {
  private readonly apiId = API_ID.STOCK.KSQ_BASE_INFO;

  constructor(private readonly client: KrxClient) {}

  /**
   * 코스닥 종목기본정보를 조회합니다.
   * @param params 조회 파라미터
   * @returns 종목기본정보 배열
   */
  fetch(params: Record<string, string> = {}): Promise<StockBaseInfo[]> {
    return this.client.get<StockBaseInfo>(
      API_CATEGORY.STOCK,
      this.apiId,
      params
    );
  }
}
