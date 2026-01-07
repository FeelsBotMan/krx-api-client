/**
 * 주식 카테고리 타입 정의
 */

/**
 * 일별매매정보 공통 인터페이스
 * 유가증권, 코스닥, 코넥스 일별매매정보에 사용
 */
export interface StockDailyTrade {
  /** 기준일자 */
  BAS_DD: string;
  /** 종목코드 */
  ISU_CD: string;
  /** 종목명 */
  ISU_NM: string;
  /** 시장구분 */
  MKT_NM: string;
  /** 소속부 */
  SECT_TP_NM: string;
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
  /** 시가총액 */
  MKTCAP: string;
  /** 상장주식수 */
  LIST_SHRS: string;
}

/**
 * 신주인수권증권 일별매매정보 인터페이스
 */
export interface SwDailyTrade {
  /** 기준일자 */
  BAS_DD: string;
  /** 시장구분 */
  MKT_NM: string;
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
  /** 시가총액 */
  MKTCAP: string;
  /** 상장증권수 */
  LIST_SHRS: string;
  /** 행사가격 */
  EXER_PRC: string;
  /** 존속기간_시작일 */
  EXST_STRT_DD: string;
  /** 존속기간_종료일 */
  EXST_END_DD: string;
  /** 목적주권_종목코드 */
  TARSTK_ISU_SRT_CD: string;
  /** 목적주권_종목명 */
  TARSTK_ISU_NM: string;
  /** 목적주권_종가 */
  TARSTK_ISU_PRSNT_PRC: string;
}

/**
 * 신주인수권증서 일별매매정보 인터페이스
 */
export interface SrDailyTrade {
  /** 기준일자 */
  BAS_DD: string;
  /** 시장구분 */
  MKT_NM: string;
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
  /** 시가총액 */
  MKTCAP: string;
  /** 상장증서수 */
  LIST_SHRS: string;
  /** 신주발행가 */
  ISU_PRC: string;
  /** 상장폐지일 */
  DELIST_DD: string;
  /** 목적주권_종목코드 */
  TARSTK_ISU_SRT_CD: string;
  /** 목적주권_종목명 */
  TARSTK_ISU_NM: string;
  /** 목적주권_종가 */
  TARSTK_ISU_PRSNT_PRC: string;
}

/**
 * 종목기본정보 공통 인터페이스
 * 유가증권, 코스닥, 코넥스 종목기본정보에 사용
 */
export interface StockBaseInfo {
  /** 표준코드 */
  ISU_CD: string;
  /** 단축코드 */
  ISU_SRT_CD: string;
  /** 한글 종목명 */
  ISU_NM: string;
  /** 한글 종목약명 */
  ISU_ABBRV: string;
  /** 영문 종목명 */
  ISU_ENG_NM: string;
  /** 상장일 */
  LIST_DD: string;
  /** 시장구분 */
  MKT_TP_NM: string;
  /** 증권구분 */
  SECUGRP_NM: string;
  /** 소속부 */
  SECT_TP_NM: string;
  /** 주식종류 */
  KIND_STKCERT_TP_NM: string;
  /** 액면가 */
  PARVAL: string;
  /** 상장주식수 */
  LIST_SHRS: string;
}
