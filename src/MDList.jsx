import React, { PropTypes } from 'react';
import styles from './MDList.css';
import _ from 'lodash';

export const ListHeader = (props) => (
  <div className={styles.listPanel__Header}>
    <img src={props.img} role="presentation" />
    <div>
      <div>{ props.data.tag }</div>
      <div className={styles.listPanel__Tag}> { props.data.value } </div>
    </div>
  </div>
);

ListHeader.propTypes = {
  data: PropTypes.object,
  img: PropTypes.string,
};

export const ListInfo = ({ data }) => (
  <div className={styles.listPanel__Info}>
    {
      data.map((kv, i) =>
        <div key={_.get(kv, 'id', i)}>
          <div>{kv.value}</div>
          <div className={styles.listPanel__Tag}>{kv.tag}</div>
        </div>)
    }
  </div>);

ListInfo.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export const ListItem = ({ header, info, img }) =>
  <div className={styles.listPanel}>
    <ListHeader data={header} img={img} />
    <ListInfo data={info} />
  </div>;

ListItem.propTypes = {
  img: PropTypes.string,
  header: PropTypes.object,
  info: PropTypes.arrayOf(PropTypes.object),
};

const MDList = (props) =>
  <div>
    { props.children }
  </div>;

MDList.propTypes = {
  children: PropTypes.any,
};

export default MDList;
