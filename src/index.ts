import { KrxClient } from "./core/KrxClient";
import { IndexClient } from "./categories/index/IndexClient";
import { StockClient } from "./categories/stock/StockClient";
import { SecurityClient } from "./categories/security/SecurityClient";
import { BondClient } from "./categories/bond/BondClient";
import { DerivativeClient } from "./categories/derivative/DerivativeClient";
import { ProductClient } from "./categories/product/ProductClient";
import { EsgClient } from "./categories/esg/EsgClient";
import { KrxClientOptions } from "./core/types";

/**
 * KRX Open API 클라이언트
 */
export class KrxOpenApi {
  /** 지수 카테고리 */
  readonly index: IndexClient;
  /** 주식 카테고리 */
  readonly stock: StockClient;
  /** 증권상품 카테고리 */
  readonly security: SecurityClient;
  /** 채권 카테고리 */
  readonly bond: BondClient;
  /** 파생상품 카테고리 */
  readonly derivative: DerivativeClient;
  /** 일반상품 카테고리 */
  readonly product: ProductClient;
  /** ESG 카테고리 */
  readonly esg: EsgClient;

  /**
   * KRX Open API 클라이언트를 생성합니다.
   * @param serviceKey KRX Open API 서비스 키
   * @param options 옵션 객체
   * @param options.baseUrl API 베이스 URL (선택사항, 기본값: https://data-dbg.krx.co.kr)
   * @param options.authKey 인증키 (선택사항, 기본값: process.env.AUTH_KEY)
   */
  constructor(options?: KrxClientOptions) {
    const client = new KrxClient({
      baseUrl: options?.baseUrl,
      authKey: options?.authKey,
    });

    this.index = new IndexClient(client);
    this.stock = new StockClient(client);
    this.security = new SecurityClient(client);
    this.bond = new BondClient(client);
    this.derivative = new DerivativeClient(client);
    this.product = new ProductClient(client);
    this.esg = new EsgClient(client);
  }
}

// 타입 및 클래스 export
export * from "./core/KrxClient";
export * from "./core/types";
export * from "./core/errors";

// 카테고리별 타입 export
export * from "./categories/index/index.types";
export * from "./categories/stock/stock.types";
export * from "./categories/security/security.types";
export * from "./categories/bond/bond.types";
export * from "./categories/derivative/derivative.types";
export * from "./categories/product/product.types";
export * from "./categories/esg/esg.types";
