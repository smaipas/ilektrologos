import React from 'react';

import { SectionH1 } from 'src/components/common/sectionHeader/SectionHeader.styles';

const SectionHeader = (props) => (
  <SectionH1 {...props}>{props.children}</SectionH1>
);

export default SectionHeader;
