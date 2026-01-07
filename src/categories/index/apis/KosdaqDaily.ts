import { KrxClient } from '../../../core/KrxClient';
import { API_CATEGORY, API_ID } from '../../../core/constants';
import { KrxIndexDaily } from '../index.types';

/**
 * KOSDAQ 시리즈 일별시세정보 API
 * API ID: kosdaq_dd_trd
 */
export class KosdaqDailyApi {
  private readonly apiId = API_ID.INDEX.KOSDAQ_DAILY;

  constructor(private readonly client: KrxClient) {}

  /**
   * KOSDAQ 시리즈 일별시세정보를 조회합니다.
   * @param params 조회 파라미터
   * @param params.basDd 기준일자 (YYYYMMDD 형식)
   * @returns 지수 일별시세정보 배열
   */
  fetch(params: { basDd: string }): Promise<KrxIndexDaily[]> {
    return this.client.get<KrxIndexDaily>(API_CATEGORY.INDEX, this.apiId, {
      BAS_DD: params.basDd,
    });
  }
}
