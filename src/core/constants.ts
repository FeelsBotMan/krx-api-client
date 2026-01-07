/**
 * KRX Open API 카테고리 상수
 */
export const API_CATEGORY = {
  /** 지수 카테고리 */
  INDEX: "idx",
  /** 주식 카테고리 */
  STOCK: "sto",
  /** 증권상품 카테고리 */
  SECURITY: "etp",
  /** 채권 카테고리 */
  BOND: "bon",
  /** 파생상품 카테고리 */
  DERIVATIVE: "drv",
  /** 일반상품 카테고리 */
  PRODUCT: "gen",
  /** ESG 카테고리 */
  ESG: "esg",
} as const;

/**
 * API 카테고리 타입
 */
export type ApiCategory = (typeof API_CATEGORY)[keyof typeof API_CATEGORY];

/**
 * KRX Open API ID 상수
 */
export const API_ID = {
  /** 지수 카테고리 API ID */
  INDEX: {
    /** KRX 시리즈 일별시세정보 */
    KRX_DAILY: "krx_dd_trd",
    /** KOSPI 시리즈 일별시세정보 */
    KOSPI_DAILY: "kospi_dd_trd",
    /** KOSDAQ 시리즈 일별시세정보 */
    KOSDAQ_DAILY: "kosdaq_dd_trd",
    /** 채권지수 시세정보 */
    BOND_DAILY: "bon_dd_trd",
    /** 파생상품지수 시세정보 */
    DERIVATIVE_DAILY: "drvprod_dd_trd",
  },
  /** 주식 카테고리 API ID */
  STOCK: {
    /** 유가증권 일별매매정보 */
    STK_DAILY_TRADE: "stk_bydd_trd",
    /** 코스닥 일별매매정보 */
    KSQ_DAILY_TRADE: "ksq_bydd_trd",
    /** 코넥스 일별매매정보 */
    KNX_DAILY_TRADE: "knx_bydd_trd",
    /** 신주인수권증권 일별매매정보 */
    SW_DAILY_TRADE: "sw_bydd_trd",
    /** 신주인수권증서 일별매매정보 */
    SR_DAILY_TRADE: "sr_bydd_trd",
    /** 유가증권 종목기본정보 */
    STK_BASE_INFO: "stk_isu_base_info",
    /** 코스닥 종목기본정보 */
    KSQ_BASE_INFO: "ksq_isu_base_info",
    /** 코넥스 종목기본정보 */
    KNX_BASE_INFO: "knx_isu_base_info",
  },
  /** 증권상품 카테고리 API ID */
  SECURITY: {
    /** ETF 일별매매정보 */
    ETF_DAILY_TRADE: "etf_bydd_trd",
    /** ETN 일별매매정보 */
    ETN_DAILY_TRADE: "etn_bydd_trd",
    /** ELW 일별매매정보 */
    ELW_DAILY_TRADE: "elw_bydd_trd",
  },
  /** 채권 카테고리 API ID */
  BOND: {
    /** 국채전문유통시장 일별매매정보 */
    KTS_DAILY_TRADE: "kts_bydd_trd",
    /** 일반채권시장 일별매매정보 */
    BND_DAILY_TRADE: "bnd_bydd_trd",
    /** 소액채권시장 일별매매정보 */
    SMB_DAILY_TRADE: "smb_bydd_trd",
  },
  /** 파생상품 카테고리 API ID */
  DERIVATIVE: {
    /** 선물 일별매매정보 (주식선물外) */
    FUT_DAILY_TRADE: "fut_bydd_trd",
    /** 주식선물(유가) 일별매매정보 */
    EQSFU_STK_DAILY_TRADE: "eqsfu_stk_bydd_trd",
    /** 주식선물(코스닥) 일별매매정보 */
    EQKFU_KSQ_DAILY_TRADE: "eqkfu_ksq_bydd_trd",
    /** 옵션 일별매매정보 (주식옵션外) */
    OPT_DAILY_TRADE: "opt_bydd_trd",
    /** 주식옵션(유가) 일별매매정보 */
    EQSOP_DAILY_TRADE: "eqsop_bydd_trd",
    /** 주식옵션(코스닥) 일별매매정보 */
    EQKOP_DAILY_TRADE: "eqkop_bydd_trd",
  },
  /** 일반상품 카테고리 API ID */
  PRODUCT: {
    /** 석유시장 일별매매정보 */
    OIL_DAILY_TRADE: "oil_bydd_trd",
    /** 금시장 일별매매정보 */
    GOLD_DAILY_TRADE: "gold_bydd_trd",
    /** 배출권 시장 일별매매정보 */
    ETS_DAILY_TRADE: "ets_bydd_trd",
  },
  /** ESG 카테고리 API ID */
  ESG: {
    /** 사회책임투자채권 정보 */
    SRI_BOND_INFO: "sri_bond_info",
    /** ESG 증권상품 정보 */
    ESG_ETP_INFO: "esg_etp_info",
    /** ESG 지수 정보 */
    ESG_INDEX_INFO: "esg_index_info",
  },
} as const;
