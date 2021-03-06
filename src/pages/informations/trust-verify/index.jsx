import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { connect, NavLink } from 'umi';
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
@connect(({ user, loading, InformationTrustVerify }) => ({
  user,
  loading,
  data: InformationTrustVerify.data,
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
      type: 'InformationTrustVerify/GET_DATA',
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
    const loading = effects['InformationTrustVerify/GET_DATA'];

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
                <h3 className={styles.title}>X??c minh hi???n t???i c???a b???n</h3>
              </div>
              <div className={styles['details-content']}>
                <div className={classnames(styles['messager-container'], 'pt20', 'pb10')}>
                  <h4 className={styles['title']}>?????a ch??? email</h4>
                  <p className={styles['norm']}>
                    B???n ???? x??c nh???n email c???a m??nh: abc@gmail.com. Email ???????c x??c nh???n r???t quan
                    tr???ng ????? cho ph??p ch??ng t??i li??n l???c v???i b???n m???t c??ch an to??n
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
                <h3 className={styles.title}>Th??m x??c minh kh??c</h3>
              </div>
              <div className={styles['details-content']}>
                <div className={styles['list-social']}>
                  <div
                    className={classnames(
                      styles['item-social'],
                      'd-flex',
                      'align-items-end',
                      'justify-content-between',
                    )}
                  >
                    <div className={styles['content-social']}>
                      <h4 className={styles['title']}>Facebook</h4>
                      <p className={styles['norm']}>
                        ????ng nh???p b???ng Facebook v?? kh??m ph?? c??c k???t n???i ????ng tin c???y c???a b???n v???i c??c
                        m??y ch??? v?? kh??ch tr??n kh???p th??? gi???i.
                      </p>
                    </div>
                    <Button className={classnames(styles.button, styles['primary-dash'])}>
                      K???t n???i
                    </Button>
                  </div>
                  <div
                    className={classnames(
                      styles['item-social'],
                      'd-flex',
                      'align-items-end',
                      'justify-content-between',
                    )}
                  >
                    <div className={styles['content-social']}>
                      <h4 className={styles['title']}>Google</h4>
                      <p className={styles['norm']}>
                        K???t n???i t??i kho???n Travel v???i t??i kho???n Google c???a b???n ????? s??? d???ng ????n gi???n v??
                        d??? d??ng h??n.
                      </p>
                    </div>
                    <Button className={classnames(styles.button, styles['primary-dash'])}>
                      K???t n???i
                    </Button>
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
