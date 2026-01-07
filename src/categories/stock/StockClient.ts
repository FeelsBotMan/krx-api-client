import { KrxClient } from "../../core/KrxClient";
import { StkDailyTradeApi } from "./apis/StkDailyTrade";
import { KsqDailyTradeApi } from "./apis/KsqDailyTrade";
import { KnxDailyTradeApi } from "./apis/KnxDailyTrade";
import { SwDailyTradeApi } from "./apis/SwDailyTrade";
import { SrDailyTradeApi } from "./apis/SrDailyTrade";
import { StkBaseInfoApi } from "./apis/StkBaseInfo";
import { KsqBaseInfoApi } from "./apis/KsqBaseInfo";
import { KnxBaseInfoApi } from "./apis/KnxBaseInfo";

/**
 * 주식 카테고리 클라이언트
 * 주식 관련 API에 대한 진입점을 제공합니다.
 */
export class StockClient {
  /** 유가증권 일별매매정보 */
  readonly stkDailyTrade: StkDailyTradeApi;
  /** 코스닥 일별매매정보 */
  readonly ksqDailyTrade: KsqDailyTradeApi;
  /** 코넥스 일별매매정보 */
  readonly knxDailyTrade: KnxDailyTradeApi;
  /** 신주인수권증권 일별매매정보 */
  readonly swDailyTrade: SwDailyTradeApi;
  /** 신주인수권증서 일별매매정보 */
  readonly srDailyTrade: SrDailyTradeApi;
  /** 유가증권 종목기본정보 */
  readonly stkBaseInfo: StkBaseInfoApi;
  /** 코스닥 종목기본정보 */
  readonly ksqBaseInfo: KsqBaseInfoApi;
  /** 코넥스 종목기본정보 */
  readonly knxBaseInfo: KnxBaseInfoApi;

  constructor(client: KrxClient) {
    this.stkDailyTrade = new StkDailyTradeApi(client);
    this.ksqDailyTrade = new KsqDailyTradeApi(client);
    this.knxDailyTrade = new KnxDailyTradeApi(client);
    this.swDailyTrade = new SwDailyTradeApi(client);
    this.srDailyTrade = new SrDailyTradeApi(client);
    this.stkBaseInfo = new StkBaseInfoApi(client);
    this.ksqBaseInfo = new KsqBaseInfoApi(client);
    this.knxBaseInfo = new KnxBaseInfoApi(client);
  }
}
