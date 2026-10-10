"use client";

import { useEffect } from "react";

/**
 * AttributionCapture — client component that reads UTM params and
 * click IDs from the URL on first load and stores them in sessionStorage.
 * The order form reads them back when submitting.
 *
 * Place this component anywhere in the layout or page.
 * It renders nothing visible.
 */
export function AttributionCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const attribution: Record<string, string> = {};

      const keys: Array<[string, string]> = [
        ["utm_source", "utmSource"],
        ["utm_medium", "utmMedium"],
        ["utm_campaign", "utmCampaign"],
        ["utm_content", "utmContent"],
        ["utm_term", "utmTerm"],
        ["fbclid", "fbclid"],
        ["ttclid", "ttclid"],
      ];

      let hasAttribution = false;
      for (const [urlKey, storeKey] of keys) {
        const val = params.get(urlKey);
        if (val) {
          attribution[storeKey] = val.slice(0, 200); // cap length
          hasAttribution = true;
        }
      }

      if (hasAttribution) {
        sessionStorage.setItem("he_attribution", JSON.stringify(attribution));
      }
    } catch {
      // sessionStorage may be blocked in some privacy modes — silently ignore
    }
  }, []);

  return null;
}
