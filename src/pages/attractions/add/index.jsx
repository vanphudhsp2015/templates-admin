import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { connect, Link, history } from 'umi';
import { Form, Input, Checkbox, Image } from 'antd';
import { Button } from 'antd';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '@/assets/styles/Common/common.scss';
import { variables, Helper } from '@/utils';
import HelperModules from '../utils/Helper';
import variablesModules from '../utils/variables';
import Table from '@/components/CommonComponent/Table';
import Select from '@/components/CommonComponent/Select';
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
@connect(({ user, loading }) => ({
  user,
  loading,
}))
class Index extends PureComponent {
  formRef = React.createRef();

  constructor(props) {
    super(props);
    const {
      location: { query },
    } = props;
    this.state = {};
    setIsMounted(true);
  }

  componentDidMount() {}

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
      loading: { effects },
    } = this.props;
    const { search } = this.state;
    const loading = effects['attractionsAdd/GET_DATA'];

    return (
      <div className={styles['main-container']}>
        <Breadcrumbs last="Chi tiết" />
        <Helmet title="Danh sách người dùng" />
        <div className="d-flex justify-content-between align-items-center mb15">
          <h3 className={styles['heading']}>Thêm mới</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <Form
              initialValues={{
                ...search,
              }}
              layout="vertical"
              ref={this.formRef}
              className={styles['form-container']}
            >
              <div className={styles['form-heading']}>
                <h4 className={styles['title']}>Thông tin thêm mới</h4>
              </div>
              <div className={styles['form-content']}>
                <div className="row">
                  <div className="col-lg-12">
                    <Form.Item
                      name="name"
                      rules={[variables.RULES.EMPTY]}
                      label={<span>Tên thành phố</span>}
                    >
                      <Input placeholder="Nhập" />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <Form.Item
                      name="img"
                      rules={[variables.RULES.EMPTY]}
                      label={<span>Hình ảnh</span>}
                    >
                      <Image
                        width={200}
                        src={`/image-default.png`}
                        placeholder={
                          <Image
                            preview={false}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                            width={200}
                          />
                        }
                      />
                    </Form.Item>
                  </div>
                  <div className="col-lg-6">
                    <Form.Item
                      name="show"
                      rules={[variables.RULES.EMPTY]}
                      label={<span>Hiển thị tại trang chủ</span>}
                      valuePropName="checked"
                    >
                      <Checkbox />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div
                className={classnames(
                  styles['form-footer'],
                  'd-flex',
                  'justify-content-between',
                  'align-items-center',
                )}
              >
                <Button className={styles.link} onClick={() => history.goBack()}>
                  Hủy
                </Button>
                <Button className={classnames(styles.button, styles.primary)}>Lưu</Button>
              </div>
            </Form>
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
