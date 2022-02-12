import React, { Fragment, useContext } from 'react';

import { HelperContext, IContextState } from '../../utils/HelperContext';
import { IScrollItem } from '../../utils/Route';

export interface IRouteLinksProps {}

const ScrollLinks = (props: IRouteLinksProps) => {
  const Scrolls = useContext<IContextState>(HelperContext);

  const scrollLinks = Scrolls.scrollItem.map(
    (scroll: IScrollItem, key: number) => (
      <div key={key} id={scroll.scrollId}>
        {scroll.name}
      </div>
    )
  );

  return <Fragment>{scrollLinks}</Fragment>;
};

export default ScrollLinks;
