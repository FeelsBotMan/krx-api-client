/**
 * 증권상품 카테고리 타입 정의
 */

/**
 * ETF 일별매매정보 인터페이스
 */
export interface EtfDailyTrade {
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
  /** 순자산가치(NAV) */
  NAV: string;
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
  /** 순자산총액 */
  INVSTASST_NETASST_TOTAMT: string;
  /** 상장좌수 */
  LIST_SHRS: string;
  /** 기초지수_지수명 */
  IDX_IND_NM: string;
  /** 기초지수_종가 */
  OBJ_STKPRC_IDX: string;
  /** 기초지수_대비 */
  CMPPREVDD_IDX: string;
  /** 기초지수_등락률 */
  FLUC_RT_IDX: string;
}

/**
 * ETN 일별매매정보 인터페이스
 */
export interface EtnDailyTrade {
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
  /** 지표가치(IV) */
  PER1SECU_INDIC_VAL: string;
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
  /** 지표가치총액 */
  INDIC_VAL_AMT: string;
  /** 상장증권수 */
  LIST_SHRS: string;
  /** 기초지수_지수명 */
  IDX_IND_NM: string;
  /** 기초지수_종가 */
  OBJ_STKPRC_IDX: string;
  /** 기초지수_대비 */
  CMPPREVDD_IDX: string;
  /** 기초지수_등락률 */
  FLUC_RT_IDX: string;
}

/**
 * ELW 일별매매정보 인터페이스
 */
export interface ElwDailyTrade {
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
  /** 기초자산_자산명 */
  ULY_NM: string;
  /** 기초자산_종가 */
  ULY_PRC: string;
  /** 기초자산_대비 */
  CMPPREVDD_PRC_ULY: string;
  /** 기초자산_등락률 */
  FLUC_RT_ULY: string;
}