'use client';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

const CalEmbed = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30-min-meeting' });
      cal('ui', {
        theme: 'dark',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#0a0a0a' },
          dark: { 'cal-brand': '#e5e5e5' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);
  return (
    <Cal
      namespace="30-min-meeting"
      calLink="siddharth-movaliya/30-min-meeting"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  );
};

export default CalEmbed;
