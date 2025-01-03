import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CountdownTimer from './components/timer/CountdownTimer';
// import Timer from './components/Timer';
// import Layout from './components/Layout';
// import NoPage from './components/NoPage';
import ExpenseTracker from './components/expense/ExpenseTracker';
// import CalendarComponent from './components/Calander';
// import Home from './components/Home';
// import Todo from './components/todo/Todo';
// import Battery from './components/battery/Battery';
// import CalendarView from './components/calander/CalanderView';
// import LocalStorageManager from './components/admin/LocalStorgeManager';
// import ProtectedRoute from './common/ProtectedRoute';
// import { UserProvider } from './common/UserContext';
// import AuthActions from './common/AuthActions';

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="money/" element={<Home />} />
    //       <Route path="money/todo" element={<Todo />} />
    //       <Route path="money/timer" element={<CountdownTimer />} />
    //       <Route path="money/contact" element={<Timer />} />
    //       <Route path="money/cal" element={<CalendarComponent />} />
    //       <Route path="money/calview" element={<CalendarView></CalendarView>} />
    //       <Route path="money/battery" element={<Battery />} />
    //       <Route path="money/admin" element={<LocalStorageManager />} />
    //       <Route path="*" element={<NoPage />} />
    //       <Route path="money/expense" element={<ExpenseTracker />} />
    //     </Route>
    //   </Routes>
    // </Router>

    // <UserProvider>
    //   <Router>
    //     <Routes>
    //       {/* Public route */}
    //       <Route path="/" element={<Layout />}>
    //       <Route path="money/auth" element={<AuthActions />} />
    //       <Route path="money/battery" element={<Battery />} />
    //       <Route path="money/timer" element={<CountdownTimer />} />
    //       {/* Protected Route */}
    //       <Route
    //         path="/money/todo"
    //         element={
    //           <ProtectedRoute>
    //             <Todo />
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route path="money/cal" element={<ProtectedRoute><CalendarComponent /></ProtectedRoute>} />
    //       <Route path="money/admin" element={<ProtectedRoute><LocalStorageManager /></ProtectedRoute>} />
    //       {/* Default Landing Page */}
    //       <Route path="money/" element={<Home />} />
    //       <Route path="money/expense" element={<ExpenseTracker />} />
    //       <Route path="money/dump" element={<NoPage />} />
    //       </Route>
    //     </Routes>
    //   </Router>
    // </UserProvider>

    <ExpenseTracker></ExpenseTracker>
  );
};

export default App;
