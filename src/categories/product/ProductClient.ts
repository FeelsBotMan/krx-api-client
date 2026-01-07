import { KrxClient } from '../../core/KrxClient';
import { OilDailyTradeApi } from './apis/OilDailyTrade';
import { GoldDailyTradeApi } from './apis/GoldDailyTrade';
import { EtsDailyTradeApi } from './apis/EtsDailyTrade';

/**
 * 일반상품 카테고리 클라이언트
 * 일반상품 관련 API에 대한 진입점을 제공합니다.
 */
export class ProductClient {
  /** 석유시장 일별매매정보 */
  readonly oilDailyTrade: OilDailyTradeApi;
  /** 금시장 일별매매정보 */
  readonly goldDailyTrade: GoldDailyTradeApi;
  /** 배출권 시장 일별매매정보 */
  readonly etsDailyTrade: EtsDailyTradeApi;

  constructor(client: KrxClient) {
    this.oilDailyTrade = new OilDailyTradeApi(client);
    this.goldDailyTrade = new GoldDailyTradeApi(client);
    this.etsDailyTrade = new EtsDailyTradeApi(client);
  }
}
