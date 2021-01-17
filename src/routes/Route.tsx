import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDomProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks';

interface RouteProps extends ReactDomProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      isPrivate={isPrivate}
      {...rest}
      render={() => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/home' }} />
        );
      }}
    />
  );
};

export default Route;
