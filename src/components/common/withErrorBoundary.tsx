import React, { type ComponentType } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

export function withErrorBoundary<P extends object>(
  WrappedComponent: ComponentType<P>,
  displayName?: string,
): ComponentType<P> {
  function Wrapped(props: P) {
    return (
      <ErrorBoundary>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  }
  Wrapped.displayName = displayName || `withErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name})`;
  return Wrapped;
}
