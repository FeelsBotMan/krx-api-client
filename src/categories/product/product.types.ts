/**
 * 일반상품 카테고리 타입 정의
 */

/**
 * 석유시장 일별매매정보 인터페이스
 */
export interface OilDailyTrade {
  /** 기준일자 */
  BAS_DD: string;
  /** 유종구분 */
  OIL_NM: string;
  /** 가중평균가격_경쟁 */
  WT_AVG_PRC: string;
  /** 가중평균가격_협의 */
  WT_DIS_AVG_PRC: string;
  /** 거래량 */
  ACC_TRDVOL: string;
  /** 거래대금 */
  ACC_TRDVAL: string;
}

/**
 * 일반상품 일별매매정보 공통 인터페이스
 * 금시장, 배출권 시장 일별매매정보에 사용
 */
export interface ProductDailyTrade {
  /** 기준일자 */
  BAS_DD: string;
  /** 종목코드 */
  ISU_CD: string;
  /** 종목명 */
  ISU_NM: string;
  /** 종가 */
  TDD_CLSPRC: string;
  /** 대비 */
  CMPPREVDD_PRC: string;
  /** 등락률 */
  FLUC_RT: string;
  /** 시가 */
  TDD_OPNPRC: string;
  /** 고가 */
  TDD_HGPRC: string;
  /** 저가 */
  TDD_LWPRC: string;
  /** 거래량 */
  ACC_TRDVOL: string;
  /** 거래대금 */
  ACC_TRDVAL: string;
}