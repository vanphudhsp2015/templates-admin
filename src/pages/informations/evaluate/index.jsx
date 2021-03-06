import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { connect, NavLink, Link } from 'umi';
import { List, Avatar, Form, Input, Button, DatePicker } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '@/assets/styles/Common/common.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import { variables, Helper } from '@/utils';
import HelperModules from '../utils/Helper';
import AvatarTable from '@/components/CommonComponent/AvatarTable';
import Breadcrumbs from '@/components/LayoutComponents/Breadcrumbs';
import Select from '@/components/CommonComponent/Select';

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
@connect(({ user, loading, InformationEvaluate }) => ({
  user,
  loading,
  data: InformationEvaluate.data,
}))
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
      type: 'InformationEvaluate/GET_DATA',
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
    const loading = effects['InformationEvaluate/GET_DATA'];

    return (
      <div className={styles['main-container']}>
        <Helmet title="Chi ti???t booking" />
        <div className="d-flex justify-content-between align-items-center mb10">
          <h3 className={styles['heading']}>H??? s??</h3>
          <Button className={classnames(styles.button, styles.primary)}>Xem h??? s??</Button>
        </div>
        <div className={styles['menu-container']}>
          <NavLink
            to="/ho-so/chinh-sua"
            className={styles['link']}
            activeClassName={styles['active']}
          >
            Ch???nh s???a h??? s??
          </NavLink>
          <NavLink
            to="/ho-so/hinh-anh"
            className={styles['link']}
            activeClassName={styles['active']}
          >
            H??nh ???nh
          </NavLink>
          <NavLink
            to="/ho-so/tin-tuong-va-xac-minh"
            className={styles['link']}
            activeClassName={styles['active']}
          >
            Tin t?????ng v?? x??c minh
          </NavLink>
          <NavLink
            to="/ho-so/danh-gia-ve-ban"
            className={styles['link']}
            activeClassName={styles['active']}
          >
            ????nh gi?? v??? b???n
          </NavLink>
          <NavLink
            to="/ho-so/danh-gia-ban-viet"
            className={styles['link']}
            activeClassName={styles['active']}
          >
            ????nh gi?? b???n vi???t
          </NavLink>
        </div>
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          colon={false}
          layout="horizontal"
          className="row"
        >
          <div className="col-lg-6 offset-lg-3 mt30">
            <div className={styles['details-container']}>
              <div
                className={classnames(
                  styles['heading-content'],
                  'd-flex',
                  'justify-content-between',
                  'align-items-center',
                )}
              >
                <h3 className={styles.title}>????nh gi??</h3>
              </div>
              <div className={styles['details-content']}>
                <div className={classnames(styles['messager-container'], 'pt20', 'pb10')}>
                  <p className={styles['norm']}>
                    T???t c??? c??c ????nh gi?? tr?????c ????y s??? hi???n ??? ????y. M???i ????nh gi?? ???n cho th???y r???ng b???n
                    v???n c???n ph???i ho??n th??nh ????nh gi?? v?? th???i gian xem x??t (14 ng??y sau khi thanh
                    to??n) v???n c??n m???.
                  </p>
                </div>
                <div className={styles['feedback-container']}>
                  <div
                    className={classnames(
                      styles['feedback-item'],
                      'd-flex',
                      'justify-content-between',
                      'align-items-center',
                    )}
                  >
                    <AvatarTable
                      fullName={'Tr???n Th??y'}
                      avatar={'/images/avatar-default.png'}
                      description={'???? ?????t 12 l???n'}
                    />
                    <div className={classnames(styles['feedback-time'], 'text-right')}>
                      <p className={styles['time']}>25/04/2021</p>
                      <Link to="/" className={styles.link}>
                        Chi ti???t
                      </Link>
                    </div>
                  </div>
                  <div
                    className={classnames(
                      styles['feedback-item'],
                      'd-flex',
                      'justify-content-between',
                      'align-items-center',
                    )}
                  >
                    <AvatarTable
                      fullName={'Nguy???n V??n B??nh'}
                      avatar={'/images/avatar-default.png'}
                      description={'T??i th??ch n??i n??y'}
                    />
                    <div className={classnames(styles['feedback-time'], 'text-right')}>
                      <p className={styles['time']}>21/04/2021</p>
                      <Link to="/" className={styles.link}>
                        Chi ti???t
                      </Link>
                    </div>
                  </div>
                  <div
                    className={classnames(
                      styles['feedback-item'],
                      'd-flex',
                      'justify-content-between',
                      'align-items-center',
                    )}
                  >
                    <AvatarTable
                      fullName={'V?? Huy H??ng'}
                      avatar={'/images/avatar-default.png'}
                      description={'N??i n??y ??em l???i c???m gi??c ngh??? d?????ng'}
                    />
                    <div className={classnames(styles['feedback-time'], 'text-right')}>
                      <p className={styles['time']}>11/04/2021</p>
                      <Link to="/" className={styles.link}>
                        Chi ti???t
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
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
