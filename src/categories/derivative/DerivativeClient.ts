import { KrxClient } from "../../core/KrxClient";
import { FutDailyTradeApi } from "./apis/FutDailyTrade";
import { EqsfuStkDailyTradeApi } from "./apis/EqsfuStkDailyTrade";
import { EqkfuKsqDailyTradeApi } from "./apis/EqkfuKsqDailyTrade";
import { OptDailyTradeApi } from "./apis/OptDailyTrade";
import { EqsopDailyTradeApi } from "./apis/EqsopDailyTrade";
import { EqkopDailyTradeApi } from "./apis/EqkopDailyTrade";

/**
 * 파생상품 카테고리 클라이언트
 * 파생상품 관련 API에 대한 진입점을 제공합니다.
 */
export class DerivativeClient {
  /** 선물 일별매매정보 (주식선물外) */
  readonly futDailyTrade: FutDailyTradeApi;
  /** 주식선물(유가) 일별매매정보 */
  readonly eqsfuStkDailyTrade: EqsfuStkDailyTradeApi;
  /** 주식선물(코스닥) 일별매매정보 */
  readonly eqkfuKsqDailyTrade: EqkfuKsqDailyTradeApi;
  /** 옵션 일별매매정보 (주식옵션外) */
  readonly optDailyTrade: OptDailyTradeApi;
  /** 주식옵션(유가) 일별매매정보 */
  readonly eqsopDailyTrade: EqsopDailyTradeApi;
  /** 주식옵션(코스닥) 일별매매정보 */
  readonly eqkopDailyTrade: EqkopDailyTradeApi;

  constructor(client: KrxClient) {
    this.futDailyTrade = new FutDailyTradeApi(client);
    this.eqsfuStkDailyTrade = new EqsfuStkDailyTradeApi(client);
    this.eqkfuKsqDailyTrade = new EqkfuKsqDailyTradeApi(client);
    this.optDailyTrade = new OptDailyTradeApi(client);
    this.eqsopDailyTrade = new EqsopDailyTradeApi(client);
    this.eqkopDailyTrade = new EqkopDailyTradeApi(client);
  }
}
