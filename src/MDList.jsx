import React, { PropTypes } from 'react';
import styles from './MDList.css';

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

export const ListInfo = (props) => (
  <div className={styles.listPanel__Info}>
    {
      props.data.map((kv) =>
        <div>
          <div>{kv.value}</div>
          <div className={styles.listPanel__Tag}>{kv.tag}</div>
        </div>)
    }
  </div>);

ListInfo.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export const ListItem = (props) =>
  <div className={styles.listPanel}>
    <ListHeader data={ props.header } img={ props.img } />
    <ListInfo data={ props.info } />
  </div>;

ListItem.propTypes = {
  img: PropTypes.string,
  header: PropTypes.object,
  info: PropTypes.arrayOf(PropTypes.object),
};

const MDList = (props) =>
  <div>
    <ListItem
      img="https://ooo.0o0.ooo/2016/07/28/5799a4985b7d9.png"
      header={{ tag: '京东', value: '客户数据' }}
      info={[{ tag: '创建者', value: '曹震东' }, { tag: '行数 / 列数', value: '3 / 2' }]}
    />
    { props.children }
  </div>;

MDList.propTypes = {
  children: PropTypes.any,
};

export default MDList;
