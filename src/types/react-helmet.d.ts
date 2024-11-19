declare module 'react-helmet' {
    import { FC, ReactNode } from 'react';
  
    interface MetaTagProps {
      name?: string;
      property?: string;
      content?: string;
      httpEquiv?: string;
    }
  
    interface LinkTagProps {
      rel?: string;
      href?: string;
      sizes?: string;
      type?: string;
      crossorigin?: string;
    }
  
    interface HelmetProps {
      children?: ReactNode;
      title?: string;
      defaultTitle?: string;
      titleTemplate?: string;
      meta?: MetaTagProps[];
      link?: LinkTagProps[];
    }
  
    export const Helmet: FC<HelmetProps>;
  }
  