/**
 * 파생상품 카테고리 타입 정의
 */

/**
 * 선물 일별매매정보 인터페이스
 * 선물, 주식선물(유가), 주식선물(코스닥) 일별매매정보에 사용
 */
export interface FutDailyTrade {
  /** 기준일자 */
  BAS_DD: string;
  /** 상품구분 */
  PROD_NM: string;
  /** 시장구분(정규/야간) */
  MKT_NM: string;
  /** 종목코드 */
  ISU_CD: string;
  /** 종목명 */
  ISU_NM: string;
  /** 종가 */
  TDD_CLSPRC: string;
  /** 대비 */
  CMPPREVDD_PRC: string;
  /** 시가 */
  TDD_OPNPRC: string;
  /** 고가 */
  TDD_HGPRC: string;
  /** 저가 */
  TDD_LWPRC: string;
  /** 현물가 */
  SPOT_PRC: string;
  /** 정산가 */
  SETL_PRC: string;
  /** 거래량 */
  ACC_TRDVOL: string;
  /** 거래대금 */
  ACC_TRDVAL: string;
  /** 미결제약정 */
  ACC_OPNINT_QTY: string;
}

/**
 * 옵션 일별매매정보 인터페이스
 * 옵션, 주식옵션(유가), 주식옵션(코스닥) 일별매매정보에 사용
 */
export interface OptDailyTrade {
  /** 기준일자 */
  BAS_DD: string;
  /** 상품구분 */
  PROD_NM: string;
  /** 권리유형(CALL/PUT) */
  RGHT_TP_NM: string;
  /** 종목코드 */
  ISU_CD: string;
  /** 종목명 */
  ISU_NM: string;
  /** 종가 */
  TDD_CLSPRC: string;
  /** 대비 */
  CMPPREVDD_PRC: string;
  /** 시가 */
  TDD_OPNPRC: string;
  /** 고가 */
  TDD_HGPRC: string;
  /** 저가 */
  TDD_LWPRC: string;
  /** 내재변동성 */
  IMP_VOLT: string;
  /** 익일정산가 */
  NXTDD_BAS_PRC: string;
  /** 거래량 */
  ACC_TRDVOL: string;
  /** 거래대금 */
  ACC_TRDVAL: string;
  /** 미결제약정 */
  ACC_OPNINT_QTY: string;
}
