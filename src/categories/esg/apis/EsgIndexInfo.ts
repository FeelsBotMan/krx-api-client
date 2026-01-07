import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { EsgIndexInfo } from "../esg.types";

/**
 * ESG 지수 정보 API
 * API ID: esg_index_info
 */
export class EsgIndexInfoApi {
  private readonly apiId = API_ID.ESG.ESG_INDEX_INFO;

  constructor(private readonly client: KrxClient) {}

  /**
   * ESG 지수 정보를 조회합니다.
   * @param params 조회 파라미터
   * @returns ESG 지수 정보 배열
   */
  fetch(params: Record<string, string> = {}): Promise<EsgIndexInfo[]> {
    return this.client.get<EsgIndexInfo>(API_CATEGORY.ESG, this.apiId, params);
  }
}
