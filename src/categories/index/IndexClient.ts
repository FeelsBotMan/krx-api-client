import { KrxClient } from '../../core/KrxClient';
import { KrxDailyApi } from './apis/KrxDaily';
import { KospiDailyApi } from './apis/KospiDaily';
import { KosdaqDailyApi } from './apis/KosdaqDaily';
import { BondDailyApi } from './apis/BondDaily';
import { DerivativeDailyApi } from './apis/DerivativeDaily';

/**
 * 지수 카테고리 클라이언트
 * 지수 관련 API에 대한 진입점을 제공합니다.
 */
export class IndexClient {
  /** KRX 시리즈 일별시세정보 */
  readonly krxDaily: KrxDailyApi;
  /** KOSPI 시리즈 일별시세정보 */
  readonly kospiDaily: KospiDailyApi;
  /** KOSDAQ 시리즈 일별시세정보 */
  readonly kosdaqDaily: KosdaqDailyApi;
  /** 채권지수 시세정보 */
  readonly bondDaily: BondDailyApi;
  /** 파생상품지수 시세정보 */
  readonly derivativeDaily: DerivativeDailyApi;

  constructor(client: KrxClient) {
    this.krxDaily = new KrxDailyApi(client);
    this.kospiDaily = new KospiDailyApi(client);
    this.kosdaqDaily = new KosdaqDailyApi(client);
    this.bondDaily = new BondDailyApi(client);
    this.derivativeDaily = new DerivativeDailyApi(client);
  }
}
