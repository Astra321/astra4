// app/layout.tsx - Cleaned version without EdgeStore references
import React from 'react';
import { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    // Initialization logic if needed
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
