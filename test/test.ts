import { config } from "dotenv";
import { KrxOpenApi } from "../src";

// .env 파일 로드
config();

// npx tsx test/test.ts

async function main() {
  const krx = new KrxOpenApi();

  const data = await krx.stock.stkDailyTrade.fetch({
    basDd: "20251230",
  });

  console.log(data);
}

main().catch(console.error);
