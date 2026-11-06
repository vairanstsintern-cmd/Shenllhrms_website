'use client'

import { useEffect } from "react";

// global-error bypasses the root layout — must include <html> and <body>
export default function GlobalError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error("[Shenll HRMS] Critical global error:", error);
  }, [error]);

  const digest =
    error instanceof Error && "digest" in error
      ? (error as Error & { digest?: string }).digest
      : undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Critical Error | Shenll HRMS</title>
        {/* Minimal inline styles — no external stylesheet dependency */}
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
            background: #F0F4F8;
            color: #334155;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
          }
          .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #E53E3E;
            background: rgba(229,62,62,0.1);
            border: 1px solid rgba(229,62,62,0.25);
            padding: 6px 16px;
            border-radius: 9999px;
            margin-bottom: 24px;
          }
          .dot {
            width: 8px; height: 8px;
            border-radius: 50%;
            background: #E53E3E;
            animation: pulse 1.4s ease-in-out infinite;
          }
          @keyframes pulse {
            0%,100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          .icon-wrap {
            width: 80px; height: 80px;
            border-radius: 20px;
            background: linear-gradient(135deg, #123B50, #087E8B);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 24px;
          }
          .icon-wrap svg { width: 40px; height: 40px; color: white; }
          h1 {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-weight: 800;
            color: #123B50;
            margin-bottom: 12px;
            line-height: 1.15;
          }
          p {
            font-size: 0.95rem;
            color: #64748B;
            max-width: 420px;
            line-height: 1.6;
            margin: 0 auto;
          }
          .digest {
            margin-top: 16px;
            font-size: 11px;
            font-family: monospace;
            color: #94A3B8;
            background: white;
            border: 1px solid #E2E8F0;
            padding: 8px 16px;
            border-radius: 10px;
          }
          .digest span { color: #64748B; font-weight: 600; }
          .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 32px;
            justify-content: center;
          }
          .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #087E8B;
            color: white;
            font-size: 14px;
            font-weight: 600;
            padding: 12px 24px;
            border-radius: 12px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            transition: background 0.2s;
          }
          .btn-primary:hover { background: #123B50; }
          .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: white;
            color: #123B50;
            font-size: 14px;
            font-weight: 600;
            padding: 12px 24px;
            border-radius: 12px;
            border: 1px solid #E2E8F0;
            cursor: pointer;
            text-decoration: none;
            transition: border-color 0.2s, color 0.2s;
          }
          .btn-secondary:hover { border-color: #087E8B; color: #087E8B; }
        `}</style>
        {/* Google Font best-effort preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <span className="badge">
          <span className="dot" />
          Critical System Error
        </span>

        <div className="icon-wrap">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>

        <h1>We&apos;re Experiencing Issues</h1>
        <p>
          A critical error has occurred and our team has been alerted. Please try reloading the
          page or contact support if the problem continues.
        </p>

        {digest && (
          <p className="digest">
            Reference: <span>{digest}</span>
          </p>
        )}

        <div className="actions">
          <button className="btn-primary" onClick={retry}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reload Page
          </button>
          <a href="/" className="btn-secondary">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </a>
          <a href="mailto:info@shenllhrms.com" className="btn-secondary">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Support
          </a>
        </div>
      </body>
    </html>
  );
}

