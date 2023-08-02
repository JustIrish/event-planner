import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/HomePage'));
const CreateEvent = lazy(() => import('../pages/CreateEventPage'));
const EventDetails = lazy(() => import('../pages/EventDetailsPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/details" element={<EventDetails />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
