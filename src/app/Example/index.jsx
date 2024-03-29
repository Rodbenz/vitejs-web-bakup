import React from 'react'
import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import ComponenExample from './component';

export default function Example() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="Example"
          element={
            <ComponenExample/>
          }
        />
      </Route>
      <Route index element={<Navigate to="/apps/Example" />} />
    </Routes>
  );
}



