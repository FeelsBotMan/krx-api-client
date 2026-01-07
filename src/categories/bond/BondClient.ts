import { KrxClient } from '../../core/KrxClient';
import { KtsDailyTradeApi } from './apis/KtsDailyTrade';
import { BndDailyTradeApi } from './apis/BndDailyTrade';
import { SmbDailyTradeApi } from './apis/SmbDailyTrade';

/**
 * 채권 카테고리 클라이언트
 * 채권 관련 API에 대한 진입점을 제공합니다.
 */
export class BondClient {
  /** 국채전문유통시장 일별매매정보 */
  readonly ktsDailyTrade: KtsDailyTradeApi;
  /** 일반채권시장 일별매매정보 */
  readonly bndDailyTrade: BndDailyTradeApi;
  /** 소액채권시장 일별매매정보 */
  readonly smbDailyTrade: SmbDailyTradeApi;

  constructor(client: KrxClient) {
    this.ktsDailyTrade = new KtsDailyTradeApi(client);
    this.bndDailyTrade = new BndDailyTradeApi(client);
    this.smbDailyTrade = new SmbDailyTradeApi(client);
  }
}
