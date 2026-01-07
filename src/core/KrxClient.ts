import { KrxClientOptions, KrxApiResponse } from "./types";
import { KrxApiError, KrxClientError } from "./errors";

/**
 * KRX Open API 공통 HTTP 클라이언트
 */
export class KrxClient {
  private readonly baseUrl: string;
  private readonly authKey: string;

  constructor(options: KrxClientOptions) {
    // AUTH_KEY는 옵션 또는 환경변수에서 가져옴
    const authKey = options.authKey ?? process.env.AUTH_KEY;
    if (!authKey) {
      throw new KrxClientError(
        "AUTH_KEY is required. Set it in options or AUTH_KEY environment variable."
      );
    }

    this.baseUrl = options.baseUrl ?? "https://data-dbg.krx.co.kr";
    this.authKey = authKey;
  }

  /**
   * GET 요청을 수행하고 응답 데이터를 반환합니다.
   * @param category 카테고리 경로 (예: 'idx', 'sto', 'esg')
   * @param apiId API ID (예: 'krx_dd_trd')
   * @param params 쿼리 파라미터
   * @returns API 응답 데이터 배열
   */
  async get<T>(
    category: string,
    apiId: string,
    params: Record<string, string>
  ): Promise<T[]> {
    try {
      const query = new URLSearchParams({
        ...params,
      });

      const url = `${this.baseUrl}/svc/apis/${category}/${apiId}?${query}`;

      console.log("[KrxClient] Request URL:", url);
      console.log("[KrxClient] Request Headers:", {
        AUTH_KEY: this.authKey
          ? `${this.authKey.substring(0, 8)}...`
          : "undefined",
      });
      console.log("[KrxClient] Request Params:", params);

      const response = await fetch(url, {
        headers: {
          AUTH_KEY: this.authKey,
        },
      });

      console.log(
        "[KrxClient] Response Status:",
        response.status,
        response.statusText
      );
      console.log(
        "[KrxClient] Response Headers:",
        Object.fromEntries(response.headers.entries())
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("[KrxClient] Error Response Body:", errorText);
        throw new KrxApiError(
          `API request failed with status ${response.status}`,
          response.status
        );
      }

      const responseText = await response.text();
      console.log(
        "[KrxClient] Response Body (raw):",
        responseText.substring(0, 500)
      );

      let json: KrxApiResponse<T>;
      try {
        json = JSON.parse(responseText) as KrxApiResponse<T>;
      } catch (parseError) {
        console.error("[KrxClient] JSON Parse Error:", parseError);
        console.error("[KrxClient] Response Text:", responseText);
        throw new KrxClientError(
          `Failed to parse JSON response: ${
            parseError instanceof Error
              ? parseError.message
              : String(parseError)
          }`
        );
      }

      console.log(
        "[KrxClient] Parsed JSON:",
        JSON.stringify(json, null, 2).substring(0, 1000)
      );
      console.log("[KrxClient] OutBlock_1 exists:", !!json?.OutBlock_1);
      console.log(
        "[KrxClient] OutBlock_1 is array:",
        Array.isArray(json?.OutBlock_1)
      );
      if (json?.OutBlock_1) {
        console.log("[KrxClient] OutBlock_1 length:", json.OutBlock_1.length);
      }

      // OutBlock_1이 없거나 배열이 아닌 경우 빈 배열 반환
      if (!Array.isArray(json?.OutBlock_1)) {
        console.warn(
          "[KrxClient] OutBlock_1 is not an array, returning empty array"
        );
        return [];
      }

      return json.OutBlock_1;
    } catch (error) {
      if (error instanceof KrxApiError) {
        throw error;
      }

      if (error instanceof Error) {
        throw new KrxClientError(`Request failed: ${error.message}`, error);
      }

      throw new KrxClientError("Unknown error occurred");
    }
  }
}
