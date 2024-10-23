import React, { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';

export default function IntercomComponent() {
  useEffect(() => {
    Intercom({
      app_id: 'r02n1kwe',
    });
  }, []);

  return null;
}
