/**
 * ESG 카테고리 타입 정의
 */

/**
 * 사회책임투자채권 정보 인터페이스
 */
export interface SriBondInfo {
  /** 기준일자 */
  BAS_DD: string;
  /** 발행기관 */
  ISUR_NM: string;
  /** 표준코드 */
  ISU_CD: string;
  /** 채권종류 */
  SRI_BND_TP_NM: string;
  /** 종목명 */
  ISU_NM: string;
  /** 상장일 */
  LIST_DD: string;
  /** 발행일 */
  ISU_DD: string;
  /** 상환일 */
  REDMPT_DD: string;
  /** 표면이자율 */
  ISU_RT: string;
  /** 발행금액 */
  ISU_AMT: string;
  /** 상장금액 */
  LIST_AMT: string;
  /** 채권유형 */
  BND_TP_NM: string;
}

/**
 * ESG 증권상품 정보 인터페이스
 */
export interface EsgEtpInfo {
  /** 기준일자 */
  BAS_DD: string;
  /** 종목명 */
  ISU_ABBRV: string;
  /** 현재가 */
  TDD_CLSPRC: string;
  /** 전일비 */
  CMPPREVDD_PRC: string;
  /** 등락률 */
  FLUC_RT: string;
  /** 상장좌수 */
  LIST_SHRS: string;
  /** 거래량(좌) */
  ACC_TRDVOL: string;
  /** 거래대금(원) */
  ACC_TRDVAL: string;
}

/**
 * ESG 지수 정보 인터페이스
 */
export interface EsgIndexInfo {
  /** 기준일자 */
  BAS_DD: string;
  /** 지수명 */
  IDX_NM: string;
  /** 현재가 */
  CLSPRC_IDX: string;
  /** 전일비 */
  PRV_DD_CMPR: string;
  /** 등락률 */
  UPDN_RATE: string;
  /** 구성종목수 */
  TRD_ISU_CNT: string;
  /** 거래량(천주) */
  ACC_TRDVOL: string;
  /** 거래대금(백만원) */
  ACC_TRDVAL: string;
}
