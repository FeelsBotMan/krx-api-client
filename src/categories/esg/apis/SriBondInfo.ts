import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { SriBondInfo } from "../esg.types";

/**
 * 사회책임투자채권 정보 API
 * API ID: sri_bond_info
 */
export class SriBondInfoApi {
  private readonly apiId = API_ID.ESG.SRI_BOND_INFO;

  constructor(private readonly client: KrxClient) {}

  /**
   * 사회책임투자채권 정보를 조회합니다.
   * @param params 조회 파라미터
   * @returns 사회책임투자채권 정보 배열
   */
  fetch(params: Record<string, string> = {}): Promise<SriBondInfo[]> {
    return this.client.get<SriBondInfo>(API_CATEGORY.ESG, this.apiId, params);
  }
}
