import React from 'react';
import Collapsible from '../Collapsible';
import CollapsibleItem from '../CollapsibleItem';

export default () => (
<Collapsible accordion defaultActiveKey={0}>
  <CollapsibleItem header='First Provider'>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
  <CollapsibleItem header='Second Provider'>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
  <CollapsibleItem header='Third Provider'>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
</Collapsible>
);
