import { KrxClient } from "../../../core/KrxClient";
import { API_CATEGORY, API_ID } from "../../../core/constants";
import { EsgEtpInfo } from "../esg.types";

/**
 * ESG 증권상품 정보 API
 * API ID: esg_etp_info
 */
export class EsgEtpInfoApi {
  private readonly apiId = API_ID.ESG.ESG_ETP_INFO;

  constructor(private readonly client: KrxClient) {}

  /**
   * ESG 증권상품 정보를 조회합니다.
   * @param params 조회 파라미터
   * @returns ESG 증권상품 정보 배열
   */
  fetch(params: Record<string, string> = {}): Promise<EsgEtpInfo[]> {
    return this.client.get<EsgEtpInfo>(API_CATEGORY.ESG, this.apiId, params);
  }
}
