import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { ProductDailyTrade } from "../product.types";

/**
 * 금시장 일별매매정보 API
 * API ID: gold_bydd_trd
 */
export class GoldDailyTradeApi {
  private readonly apiId = API_ID.PRODUCT.GOLD_DAILY_TRADE;

  constructor(private readonly client: KrxClient) {}

  /**
   * 금시장 일별매매정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 일별매매정보 배열
   */
  fetch(params: { basDd: string }): Promise<ProductDailyTrade[]> {
    return this.client.get<ProductDailyTrade>(
      API_CATEGORY.PRODUCT,
      this.apiId,
      {
        BAS_DD: params.basDd,
      }
    );
  }
}
