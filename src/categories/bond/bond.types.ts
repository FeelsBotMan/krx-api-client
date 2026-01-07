/**
 * 채권 카테고리 타입 정의
 */

/**
 * 국채전문유통시장 일별매매정보 인터페이스
 */
export interface KtsDailyTrade {
  /** 기준일자 */
  BAS_DD: string;
  /** 시장구분 */
  MKT_NM: string;
  /** 종목코드 */
  ISU_CD: string;
  /** 종목명 */
  ISU_NM: string;
  /** 만기년수 */
  BND_EXP_TP_NM: string;
  /** 종목구분 */
  GOVBND_ISU_TP_NM: string;
  /** 종가_가격 */
  CLSPRC: string;
  /** 종가_대비 */
  CMPPREVDD_PRC: string;
  /** 종가_수익률 */
  CLSPRC_YD: string;
  /** 시가_가격 */
  OPNPRC: string;
  /** 시가_수익률 */
  OPNPRC_YD: string;
  /** 고가_가격 */
  HGPRC: string;
  /** 고가_수익률 */
  HGPRC_YD: string;
  /** 저가_가격 */
  LWPRC: string;
  /** 저가_수익률 */
  LWPRC_YD: string;
  /** 거래량 */
  ACC_TRDVOL: string;
  /** 거래대금 */
  ACC_TRDVAL: string;
}

/**
 * 채권 일별매매정보 공통 인터페이스
 * 일반채권시장, 소액채권시장 일별매매정보에 사용
 */
export interface BondDailyTrade {
  /** 기준일자 */
  BAS_DD: string;
  /** 시장구분 */
  MKT_NM: string;
  /** 종목코드 */
  ISU_CD: string;
  /** 종목명 */
  ISU_NM: string;
  /** 종가_가격 */
  CLSPRC: string;
  /** 종가_대비 */
  CMPPREVDD_PRC: string;
  /** 종가_수익률 */
  CLSPRC_YD: string;
  /** 시가_가격 */
  OPNPRC: string;
  /** 시가_수익률 */
  OPNPRC_YD: string;
  /** 고가_가격 */
  HGPRC: string;
  /** 고가_수익률 */
  HGPRC_YD: string;
  /** 저가_가격 */
  LWPRC: string;
  /** 저가_수익률 */
  LWPRC_YD: string;
  /** 거래량 */
  ACC_TRDVOL: string;
  /** 거래대금 */
  ACC_TRDVAL: string;
}
