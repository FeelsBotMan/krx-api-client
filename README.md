# KRX Open API TypeScript 클라이언트

[KRX Open API](https://openapi.krx.co.kr/contents/OPP/MAIN/main/index.cmd)를 위한 TypeScript 클라이언트 라이브러리입니다.

## 환경 설정

`.env` 파일에 인증키를 설정합니다:

```env
AUTH_KEY=your_auth_key_here
```

## 사용법

```typescript
import { KrxOpenApi } from 'krx-api-client';

// AUTH_KEY는 .env 파일에서 자동으로 읽어옵니다
const krx = new KrxOpenApi();

// 지수 카테고리 - KRX 시리즈 일별시세정보
const data = await krx.index.krxDaily.fetch({
  basDd: '20251230',
});

// KOSPI 시리즈 일별시세정보
const kospiData = await krx.index.kospiDaily.fetch({
  basDd: '20251230',
});

// KOSDAQ 시리즈 일별시세정보
const kosdaqData = await krx.index.kosdaqDaily.fetch({
  basDd: '20251230',
});
```

## 카테고리

### 지수 (Index)
- `krx.index.krxDaily` - KRX 시리즈 일별시세정보
- `krx.index.kospiDaily` - KOSPI 시리즈 일별시세정보
- `krx.index.kosdaqDaily` - KOSDAQ 시리즈 일별시세정보
- `krx.index.bondDaily` - 채권지수 시세정보
- `krx.index.derivativeDaily` - 파생상품지수 시세정보

### 주식 (Stock)
- `krx.stock.stkDailyTrade` - 유가증권 일별매매정보
- `krx.stock.ksqDailyTrade` - 코스닥 일별매매정보
- `krx.stock.knxDailyTrade` - 코넥스 일별매매정보
- `krx.stock.swDailyTrade` - 신주인수권증권 일별매매정보
- `krx.stock.srDailyTrade` - 신주인수권증서 일별매매정보
- `krx.stock.stkBaseInfo` - 유가증권 종목기본정보
- `krx.stock.ksqBaseInfo` - 코스닥 종목기본정보
- `krx.stock.knxBaseInfo` - 코넥스 종목기본정보

### 증권상품 (Security)
- `krx.security.etfDailyTrade` - ETF 일별매매정보
- `krx.security.etnDailyTrade` - ETN 일별매매정보
- `krx.security.elwDailyTrade` - ELW 일별매매정보

### 채권 (Bond)
- `krx.bond.ktsDailyTrade` - 국채전문유통시장 일별매매정보
- `krx.bond.bndDailyTrade` - 일반채권시장 일별매매정보
- `krx.bond.smbDailyTrade` - 소액채권시장 일별매매정보

### 파생상품 (Derivative)
- `krx.derivative.futDailyTrade` - 선물 일별매매정보 (주식선물外)
- `krx.derivative.eqsfuStkDailyTrade` - 주식선물(유가) 일별매매정보
- `krx.derivative.eqkfuKsqDailyTrade` - 주식선물(코스닥) 일별매매정보
- `krx.derivative.optDailyTrade` - 옵션 일별매매정보 (주식옵션外)
- `krx.derivative.eqsopDailyTrade` - 주식옵션(유가) 일별매매정보
- `krx.derivative.eqkopDailyTrade` - 주식옵션(코스닥) 일별매매정보

### 일반상품 (Product)
- `krx.product.oilDailyTrade` - 석유시장 일별매매정보
- `krx.product.goldDailyTrade` - 금시장 일별매매정보
- `krx.product.etsDailyTrade` - 배출권 시장 일별매매정보

### ESG
- `krx.esg.sriBondInfo` - 사회책임투자채권 정보
- `krx.esg.esgEtpInfo` - ESG 증권상품 정보
- `krx.esg.esgIndexInfo` - ESG 지수 정보

## 라이선스

MIT

