import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySelector } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({sections}) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
)

const mapStatetoProps = createStructuredSelector({
  sections: selectDirectorySelector
})
export default connect(mapStatetoProps)(Directory);
