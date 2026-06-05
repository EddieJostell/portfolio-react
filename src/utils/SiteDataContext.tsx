import { PropsWithChildren } from 'react';
import { SiteDataContext, initialSiteData } from './siteData';

export const SiteDataProvider = ({ children }: PropsWithChildren) => (
  <SiteDataContext.Provider value={initialSiteData}>
    {children}
  </SiteDataContext.Provider>
);
