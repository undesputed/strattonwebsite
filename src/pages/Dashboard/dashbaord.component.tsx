import * as React from 'react';

interface Props {}

const DashboardCoponent: React.FC<Props> = () => {
  return (
    <>
      <button type="button" className="btn btn-primary">
        This is a bootstrap button
      </button>
    </>
  );
};

export default DashboardCoponent;
