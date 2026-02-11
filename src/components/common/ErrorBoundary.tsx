import React, { Component, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div style={{
          padding: '1rem 1.5rem',
          border: '2px solid var(--ifm-color-danger)',
          borderRadius: '0.5rem',
          backgroundColor: 'var(--ifm-color-danger-lightest, #fef2f2)',
          margin: '1rem 0',
        }}>
          <div style={{ fontWeight: 600, color: 'var(--ifm-color-danger)', marginBottom: '0.5rem' }}>
            Fehler beim Laden der interaktiven Komponente
          </div>
          <p style={{ fontSize: '0.875rem', margin: 0, color: 'var(--ifm-color-emphasis-600)' }}>
            Bitte lade die Seite neu. Falls das Problem bestehen bleibt, funktioniert die Seite auch ohne diese Komponente.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
