import React from 'react';
import ActiveDoctor from './ActiveDoctor';
import DeactiveDoctor from './DeactiveDoctor';

const Approve = () => {
  return (
    <div className="approve">
      <h2>Approve Doctors</h2>
      <div className="active-doctors">
        <h3>Active Doctors</h3>
        <ActiveDoctor />
      </div>
      <div className="inactive-doctors">
        <h3>Inactive Doctors</h3>
        <DeactiveDoctor />
      </div>
    </div>
  );
};

export default Approve;
