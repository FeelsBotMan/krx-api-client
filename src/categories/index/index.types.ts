/**
 * 지수 카테고리 타입 정의
 */

/**
 * 지수 일별시세정보 공통 인터페이스
 * KRX, KOSPI, KOSDAQ 시리즈 일별시세정보에 사용
 */
export interface KrxIndexDaily {
  /** 기준일자 */
  BAS_DD: string;
  /** 계열구분 */
  IDX_CLSS: string;
  /** 지수명 */
  IDX_NM: string;
  /** 종가 */
  CLSPRC_IDX: string;
  /** 대비 */
  CMPPREVDD_IDX: string;
  /** 등락률 */
  FLUC_RT: string;
  /** 시가 */
  OPNPRC_IDX: string;
  /** 고가 */
  HGPRC_IDX: string;
  /** 저가 */
  LWPRC_IDX: string;
  /** 거래량 */
  ACC_TRDVOL: string;
  /** 거래대금 */
  ACC_TRDVAL: string;
  /** 상장시가총액 */
  MKTCAP: string;
}

/**
 * 채권지수 시세정보 인터페이스
 */
export interface BondIndexDaily {
  /** 기준일자 */
  BAS_DD: string;
  /** 지수명 */
  BND_IDX_GRP_NM: string;
  /** 총수익지수_종가 */
  TOT_EARNG_IDX: string;
  /** 총수익지수_대비 */
  TOT_EARNG_IDX_CMPPREVDD: string;
  /** 순가격지수_종가 */
  NETPRC_IDX: string;
  /** 순가격지수_대비 */
  NETPRC_IDX_CMPPREVDD: string;
  /** 제로재투자지수_종가 */
  ZERO_REINVST_IDX: string;
  /** 제로재투자지수_대비 */
  ZERO_REINVST_IDX_CMPPREVDD: string;
  /** 콜재투자지수_종가 */
  CALL_REINVST_IDX: string;
  /** 콜재투자지수_대비 */
  CALL_REINVST_IDX_CMPPREVDD: string;
  /** 시장가격지수_종가 */
  MKT_PRC_IDX: string;
  /** 시장가격지수_대비 */
  MKT_PRC_IDX_CMPPREVDD: string;
  /** 듀레이션 */
  AVG_DURATION: string;
  /** 컨벡시티 */
  AVG_CONVEXITY_PRC: string;
  /** YTM */
  BND_IDX_AVG_YD: string;
}

/**
 * 파생상품지수 시세정보 인터페이스
 */
export interface DerivativeIndexDaily {
  /** 기준일자 */
  BAS_DD: string;
  /** 계열구분 */
  IDX_CLSS: string;
  /** 지수명 */
  IDX_NM: string;
  /** 종가 */
  CLSPRC_IDX: string;
  /** 대비 */
  CMPPREVDD_IDX: string;
  /** 등락률 */
  FLUC_RT: string;
  /** 시가 */
  OPNPRC_IDX: string;
  /** 고가 */
  HGPRC_IDX: string;
  /** 저가 */
  LWPRC_IDX: string;
}
