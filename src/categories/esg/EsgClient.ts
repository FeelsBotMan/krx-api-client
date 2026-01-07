import { KrxClient } from '../../core/KrxClient';
import { SriBondInfoApi } from './apis/SriBondInfo';
import { EsgEtpInfoApi } from './apis/EsgEtpInfo';
import { EsgIndexInfoApi } from './apis/EsgIndexInfo';

/**
 * ESG 카테고리 클라이언트
 * ESG 관련 API에 대한 진입점을 제공합니다.
 */
export class EsgClient {
  /** 사회책임투자채권 정보 */
  readonly sriBondInfo: SriBondInfoApi;
  /** ESG 증권상품 정보 */
  readonly esgEtpInfo: EsgEtpInfoApi;
  /** ESG 지수 정보 */
  readonly esgIndexInfo: EsgIndexInfoApi;

  constructor(client: KrxClient) {
    this.sriBondInfo = new SriBondInfoApi(client);
    this.esgEtpInfo = new EsgEtpInfoApi(client);
    this.esgIndexInfo = new EsgIndexInfoApi(client);
  }
}
