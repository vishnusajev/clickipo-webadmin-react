// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas, redirectToLogin, redirectToDashboard } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      onEnter: redirectToLogin,
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Offerings/reducer'),
          import('containers/Offerings/sagas'),
          import('containers/Offerings'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('offering', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToDashboard,
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Login/sagas'),
          import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, component]) => {
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToDashboard,
      path: '/password-recovery',
      name: 'passwordRecovery',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/PasswordRecovery/sagas'),
          import('containers/PasswordRecovery'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, component]) => {
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToDashboard,
      path: '/reset-password',
      name: 'resetPassword',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ResetPassword/sagas'),
          import('containers/ResetPassword'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, component]) => {
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin,
      path: '/offerings',
      name: 'offerings',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Offerings/reducer'),
          import('containers/Offerings/sagas'),
          import('containers/Offerings'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('offering', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin,
      path: '/offering-detail',
      name: 'offerings',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Offerings/reducer'),
          import('containers/OfferingDetails/sagas'),
          import('containers/OfferingDetails'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('offering', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin,
      path: '/investor-detail',
      name: 'investorDetails',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/InvestorDetails/reducer'),
          import('containers/InvestorDetails/sagas'),
          import('containers/InvestorDetails'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('investors', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
