import { KrxClient } from '../../../core/KrxClient';
import { API_CATEGORY, API_ID } from '../../../core/constants';
import { DerivativeIndexDaily } from '../index.types';

/**
 * 파생상품지수 시세정보 API
 * API ID: drvprod_dd_trd
 */
export class DerivativeDailyApi {
  private readonly apiId = API_ID.INDEX.DERIVATIVE_DAILY;

  constructor(private readonly client: KrxClient) {}

  /**
   * 파생상품지수 시세정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 파생상품지수 시세정보 배열
   */
  fetch(params: { basDd: string }): Promise<DerivativeIndexDaily[]> {
    return this.client.get<DerivativeIndexDaily>(API_CATEGORY.INDEX, this.apiId, {
      BAS_DD: params.basDd,
    });
  }
}
