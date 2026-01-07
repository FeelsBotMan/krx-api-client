import { KrxClient } from '../../../core/KrxClient';
import { API_CATEGORY, API_ID } from '../../../core/constants';
import { BondIndexDaily } from '../index.types';

/**
 * 채권지수 시세정보 API
 * API ID: bon_dd_trd
 */
export class BondDailyApi {
  private readonly apiId = API_ID.INDEX.BOND_DAILY;

  constructor(private readonly client: KrxClient) {}

  /**
   * 채권지수 시세정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 채권지수 시세정보 배열
   */
  fetch(params: { basDd: string }): Promise<BondIndexDaily[]> {
    return this.client.get<BondIndexDaily>(API_CATEGORY.INDEX, this.apiId, {
      BAS_DD: params.basDd,
    });
  }
}
