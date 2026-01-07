/**
 * KRX Open API 에러 클래스
 */

export class KrxApiError extends Error {
  constructor(
    message: string,
    public readonly statusCode?: number,
    public readonly response?: unknown
  ) {
    super(message);
    this.name = "KrxApiError";
    Object.setPrototypeOf(this, KrxApiError.prototype);
  }
}

export class KrxClientError extends Error {
  constructor(message: string, public readonly cause?: Error) {
    super(message);
    this.name = "KrxClientError";
    Object.setPrototypeOf(this, KrxClientError.prototype);
  }
}
