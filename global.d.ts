declare global {
  var mongoose: {
    conn: typeof import('mongoose') | null;
    promise: Promise<typeof import('mongoose')> | null;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function fbq(...args: any[]): void;
}

export {};
