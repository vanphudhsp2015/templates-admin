import 'rc-drawer/assets/index.css';
import React from 'react';
import DrawerMenu from 'rc-drawer';
import { connect, withRouter } from 'umi';
import PropTypes from 'prop-types';
import MenuLeft from './MenuLeft';
import MenuTop from './MenuTop';

const mapStateToProps = ({ settings }) => ({
  isMenuTop: settings.isMenuTop,
  isMobileMenuOpen: settings.isMobileMenuOpen,
  isMobileView: settings.isMobileView,
  isLightTheme: settings.isLightTheme,
});

@withRouter
@connect(mapStateToProps)
class AppMenu extends React.Component {
  toggleOpen = () => {
    const { dispatch, isMobileMenuOpen } = this.props;
    document
      .querySelector('#root')
      .setAttribute(
        'style',
        !isMobileMenuOpen ? 'overflow: hidden; width: 100%; height: 100%;' : '',
      );
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isMobileMenuOpen',
        value: !isMobileMenuOpen,
      },
    });
  };

  render() {
    const { isMenuTop, isMobileMenuOpen, isMobileView, isLightTheme } = this.props;
    const BootstrappedMenu = () => {
      if (isMobileView) {
        return (
          <DrawerMenu
            className={isLightTheme ? 'drawer-light' : ''}
            getContainer={null}
            level={null}
            onHandleClick={this.toggleOpen}
            open={isMobileMenuOpen}
          >
            <MenuLeft />
          </DrawerMenu>
        );
      }
      if (isMenuTop) {
        return <MenuTop />;
      }
      return <MenuLeft />;
    };

    return BootstrappedMenu();
  }
}

AppMenu.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  dispatch: PropTypes.objectOf(PropTypes.any),
  isMenuTop: PropTypes.bool,
  isMobileView: PropTypes.bool,
  isLightTheme: PropTypes.bool,
};

AppMenu.defaultProps = {
  isMobileMenuOpen: false,
  dispatch: {},
  isMenuTop: false,
  isMobileView: false,
  isLightTheme: false,
};

export default AppMenu;
