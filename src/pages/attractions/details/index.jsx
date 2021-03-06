import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { connect, Link } from 'umi';
import { List, Avatar, Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '@/assets/styles/Common/common.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import { variables, Helper } from '@/utils';
import HelperModules from '../utils/Helper';
import AvatarTable from '@/components/CommonComponent/AvatarTable';
import Breadcrumbs from '@/components/LayoutComponents/Breadcrumbs';

let isMounted = true;
/**
 * Set isMounted
 * @param {boolean} value
 * @returns {boolean} value of isMounted
 */
const setIsMounted = (value = true) => {
  isMounted = value;
  return isMounted;
};
/**
 * Get isMounted
 * @returns {boolean} value of isMounted
 */
const getIsMounted = () => isMounted;
@connect(({ user, loading, attractionsDetails }) => ({ user, loading, data: attractionsDetails.data }))
class Index extends PureComponent {
  constructor(props) {
    super(props);
    const {
      location: { query },
    } = props;
    this.state = {
      visible: false,
      search: {
        page: query?.page || variables.PAGINATION.PAGE,
        limit: query?.limit || variables.PAGINATION.PAGE_SIZE,
        keyWord: query?.keyWord,
      },
      objects: {},
    };
    setIsMounted(true);
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'attractionsDetails/GET_DATA',
      payload: {},
    });
  }

  componentWillUnmount() {
    setIsMounted(false);
  }

  /**
   * Set state properties
   * @param {object} data the data input
   * @param {function} callback the function which will be called after setState
   * @returns {void} call this.setState to update state
   * @memberof setStateData
   */
  setStateData = (state, callback) => {
    if (!getIsMounted()) {
      return;
    }
    this.setState(state, callback);
  };

  render() {
    const {
      data,
      loading: { effects },
    } = this.props;
    const loading = effects['attractionsDetails/GET_DATA'];

    return (
      <div className={styles['main-container']}>
        <Helmet title="Chi ti???t services" />
        <Breadcrumbs last="Chi ti???t" />
        <div className="d-flex justify-content-between align-items-center mb10">
          <h3 className={styles['heading']}>Chi ti???t services</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className={styles['details-container']}>
              <div
                className={classnames(
                  styles['heading-content'],
                  'd-flex',
                  'justify-content-between',
                  'align-items-center',
                )}
              >
                <h3 className={styles.title}>Y??u c???u ?????t tr?????c</h3>
                <p className={styles.time}>
                  H???t h???n sau <strong className={styles.danger}>22:12:54</strong>
                </p>
              </div>
              <div className={styles['details-content']}>
                <div
                  className={classnames(
                    styles['details-item'],
                    'd-flex',
                    'justify-content-between',
                    'align-items-center',
                  )}
                >
                  <div className={classnames(styles.col, 'min-width-150')}>
                    <p className={styles['norm']}>T??i s???n</p>
                  </div>
                  <div
                    className={classnames(styles.col, 'min-width-150')}
                    style={{
                      width: 'calc(100% - 150px - 120px)',
                    }}
                  >
                    <p className={styles['norm']}>???????c trang b??? ?????y ?????</p>
                  </div>
                  <div className={classnames(styles.col, 'min-width-120')}>
                    <Link to="/" className={styles.link}>
                      Xem t??i s???n
                    </Link>
                  </div>
                </div>
                <div
                  className={classnames(
                    styles['details-item'],
                    'd-flex',
                    'justify-content-between',
                    'align-items-center',
                  )}
                >
                  <div className={classnames(styles.col, 'min-width-150')}>
                    <p className={styles['norm']}>Ng??y ?????n</p>
                  </div>
                  <div
                    className={classnames(styles.col, 'min-width-150')}
                    style={{
                      width: 'calc(100% - 150px - 120px)',
                    }}
                  >
                    <p className={styles['norm']}>22/04/2021</p>
                  </div>
                  <div className={classnames(styles.col, 'min-width-120')}>
                    <Link to="/" className={styles.link}>
                      Xem l???ch
                    </Link>
                  </div>
                </div>
                <div
                  className={classnames(
                    styles['details-item'],
                    'd-flex',
                    'justify-content-between',
                    'align-items-center',
                  )}
                >
                  <div className={classnames(styles.col, 'min-width-150')}>
                    <p className={styles['norm']}>T??i s???n</p>
                  </div>
                  <div
                    className={classnames(styles.col, 'min-width-150')}
                    style={{
                      width: 'calc(100% - 150px)',
                    }}
                  >
                    <p className={styles['norm']}>24/04/2021</p>
                  </div>
                </div>
                <div
                  className={classnames(
                    styles['details-item'],
                    'd-flex',
                    'justify-content-between',
                    'align-items-center',
                  )}
                >
                  <div className={classnames(styles.col, 'min-width-150')}>
                    <p className={styles['norm']}>S??? ????m</p>
                  </div>
                  <div
                    className={classnames(styles.col, 'min-width-150')}
                    style={{
                      width: 'calc(100% - 150px)',
                    }}
                  >
                    <p className={styles['norm']}>3</p>
                  </div>
                </div>
                <div
                  className={classnames(
                    styles['details-item'],
                    'd-flex',
                    'justify-content-between',
                    'align-items-center',
                  )}
                >
                  <div className={classnames(styles.col, 'min-width-150')}>
                    <p className={styles['norm']}>S??? kh??ch</p>
                  </div>
                  <div
                    className={classnames(styles.col, 'min-width-150')}
                    style={{
                      width: 'calc(100% - 150px)',
                    }}
                  >
                    <p className={styles['norm']}>10</p>
                  </div>
                </div>
                <div
                  className={classnames(
                    styles['details-item'],
                    'd-flex',
                    'justify-content-between',
                    'align-items-center',
                  )}
                >
                  <div className={classnames(styles.col, 'min-width-150')}>
                    <p className={styles['norm']}>Ch??nh s??ch h???y</p>
                  </div>
                  <div
                    className={classnames(styles.col, 'min-width-150')}
                    style={{
                      width: 'calc(100% - 150px - 150px)',
                    }}
                  >
                    <p className={styles['norm']}>Linh ho???t</p>
                  </div>
                  <div className={classnames(styles.col, 'min-width-150')}>
                    <Link to="/" className={styles.link}>
                      Xem ch??nh s??ch
                    </Link>
                  </div>
                </div>
                <div
                  className={classnames(
                    styles['details-item'],
                    'd-flex',
                    'justify-content-between',
                    'align-items-center',
                  )}
                >
                  <div className={classnames(styles.col, 'min-width-150')}>
                    <p className={styles['norm']}>Gi?? (m???i ????m)</p>
                  </div>
                  <div
                    className={classnames(styles.col, 'min-width-150')}
                    style={{
                      width: 'calc(100% - 150px )',
                    }}
                  >
                    <p className={styles['norm']}>700.000 ??</p>
                  </div>
                </div>
                <div
                  className={classnames(
                    styles['details-item'],
                    'd-flex',
                    'justify-content-between',
                    'align-items-center',
                  )}
                >
                  <div className={classnames(styles.col, 'min-width-150')}>
                    <p className={styles['norm']}>700.000 ?? x 3</p>
                  </div>
                  <div
                    className={classnames(styles.col, 'min-width-150')}
                    style={{
                      width: 'calc(100% - 150px )',
                    }}
                  >
                    <p className={styles['norm']}>2.100.000 ??</p>
                  </div>
                </div>
                <div
                  className={classnames(
                    styles['details-item'],
                    'd-flex',
                    'justify-content-between',
                    'align-items-center',
                  )}
                >
                  <div className={classnames(styles.col, 'min-width-150')}>
                    <p className={styles['norm']}>T???ng ph??</p>
                  </div>
                  <div
                    className={classnames(styles.col, 'min-width-150')}
                    style={{
                      width: 'calc(100% - 150px )',
                    }}
                  >
                    <p className={styles['norm']}>700.000 ??</p>
                  </div>
                </div>
                <div
                  className={classnames(
                    styles['details-item'],
                    'd-flex',
                    'justify-content-between',
                    'align-items-center',
                  )}
                >
                  <div className={classnames(styles.col, 'min-width-150')}>
                    <p className={styles['norm']}>Ph?? ch??? nh??</p>
                  </div>
                  <div
                    className={classnames(styles.col, 'min-width-150')}
                    style={{
                      width: 'calc(100% - 150px )',
                    }}
                  >
                    <p className={styles['norm']}>- 50.000 ??</p>
                  </div>
                </div>
                <div
                  className={classnames(
                    styles['details-item'],
                    'd-flex',
                    'justify-content-between',
                    'align-items-center',
                  )}
                >
                  <div className={classnames(styles.col, 'min-width-150')}>
                    <p className={styles['norm']}>
                      <strong>T???ng c???ng</strong>
                    </p>
                  </div>
                  <div
                    className={classnames(styles.col, 'min-width-150')}
                    style={{
                      width: 'calc(100% - 150px )',
                    }}
                  >
                    <p className={styles['norm']}>
                      <strong>650.000 ??</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles['details-container']}>
              <div
                className={classnames(
                  styles['heading-content'],
                  'd-flex',
                  'justify-content-between',
                  'align-items-center',
                )}
              >
                <h3 className={styles.title}>V??? kh??ch h??ng</h3>
              </div>
              <div className={styles['details-content']}>
                <div
                  className={classnames(styles['image-container'], 'd-flex', 'align-items-center')}
                >
                  <Avatar src="/images/avatar-default.png" alt="avatar-default." size={100} />
                  <div className={styles['content']}>
                    <h4 className={styles['title']}>Tr???n Th??y</h4>
                    <p className={styles['norm']}>Tham gia t??? th??ng 10/2019 - ???? ?????t 12 l???n</p>
                    <p className={styles['norm']}>25 tu???i</p>
                  </div>
                </div>
                <div className={styles['messager-container']}>
                  <h4 className={styles['title']}>Tin nh???n</h4>
                  <p className={styles['norm']}>
                    Xin ch??o, M??nh th???y n??i l??u tr?? c???a b???n r???t ph?? h???p v???i k??? ho???ch s???p t???i c???a
                    t??i. B???n x??c nh???n gi??p m??nh nh??.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles['details-container']}>
              <div
                className={classnames(
                  styles['heading-content'],
                  'd-flex',
                  'justify-content-between',
                  'align-items-center',
                )}
              >
                <div>
                  <h3 className={styles.title}>Duy???t y??u c???u</h3>
                  <p className={styles['norm']}>
                    B???n s??? b??? ph???t n???u b???n kh??ng duy???t ho???c t??? ch???i y??u c???u n??y tr?????c khi n?? h???t h???n
                  </p>
                </div>
              </div>
              <div className={styles['details-content']}>
                <Form hideRequiredMark layout="vertical" className={styles['form-container']}>
                  <Form.Item
                    label={<span className={styles.label}>Tin nh???n</span>}
                    name="messager"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input.TextArea
                      autoSize={{ minRows: 7, maxRows: 10 }}
                      placeholder={'Nh???p'}
                      showCount
                    />
                  </Form.Item>
                  <div
                    className={classnames(
                      styles['group-button'],
                      'd-flex',
                      'justify-content-center',
                      'align-items-center',
                    )}
                  >
                    <Button
                      className={classnames(styles.button, styles.primary)}
                      onClick={this.onLogin}
                    >
                      Duy???t y??u c???u
                    </Button>
                    <Button className={classnames(styles.button, styles.danger)}>T??? ch???i</Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  dispatch: PropTypes.objectOf(PropTypes.any),
  loading: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.objectOf(PropTypes.any),
};

Index.defaultProps = {
  dispatch: {},
  loading: {},
  location: {},
};

export default Index;
