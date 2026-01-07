import { KrxClient } from "../../core/KrxClient";
import { EtfDailyTradeApi } from "./apis/EtfDailyTrade";
import { EtnDailyTradeApi } from "./apis/EtnDailyTrade";
import { ElwDailyTradeApi } from "./apis/ElwDailyTrade";

/**
 * 증권상품 카테고리 클라이언트
 * 증권상품 관련 API에 대한 진입점을 제공합니다.
 */
export class SecurityClient {
  /** ETF 일별매매정보 */
  readonly etfDailyTrade: EtfDailyTradeApi;
  /** ETN 일별매매정보 */
  readonly etnDailyTrade: EtnDailyTradeApi;
  /** ELW 일별매매정보 */
  readonly elwDailyTrade: ElwDailyTradeApi;

  constructor(client: KrxClient) {
    this.etfDailyTrade = new EtfDailyTradeApi(client);
    this.etnDailyTrade = new EtnDailyTradeApi(client);
    this.elwDailyTrade = new ElwDailyTradeApi(client);
  }
}
