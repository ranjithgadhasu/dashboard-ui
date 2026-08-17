import { Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";
import ProfileLayout from "../components/profileLayout/ProfileLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import TaskList from "../pages/Tasks/TaskList";
import Calendar from "../pages/Calendar/Calendar";

import Chat from "../pages/Chat/Chat";
import ProjectList from "../pages/Projects/ProjectList";

import Notes from "../pages/Notes/Notes";

import Settings from "../pages/Settings/Settings";
import Profile from "../pages/Profile/Profile";
import DashboardFour from "../components/dashboard/DashboardFour";
import DashboardThree from "../components/dashboard/DashboardThree";
import DashboardTwo from "../components/dashboard/DashboardTwo";
import DashboardOne from "../components/dashboard/DashboardOne";
import DashboardFive from "../components/dashboardfive/DashboardFive";
import DashboardFiveLayout from "../components/dashboardFiveLayout/DashboardFiveLayout";
import DashboardFiveV2 from "../components/fivedashboardv2/DashboardFiveV2";
import DashboardSix from "../components/dashboardsix/DashboardSix";

import Products from "../pages/Ecommerce/Products";
import Orders from "../pages/Ecommerce/Orders";
import Customers from "../pages/Ecommerce/Customers";
import Categories from "../pages/Ecommerce/Categories";

import CalendarMainSidebarLayout from "../components/calenderlayouts/CalendarMainSidebarLayout";

import MailPage from "../pages/Mail/MailPage";
import MainSidebarLayout from "../components/Mail/layouts/MainSidebarLayout";
import ChatMailLayout from "../components/Mail/MailLayout/ChatLayout";

import ChatConversationMail from "../pages/Mail/Chat/ChatConversationMail";
import TaskListVersion from "../pages/Tasks/TaskListVersion";

import ProjectDetailsLayout from "../components/Projects/ProjectDetails/ProjectDetailsLayout";
import ProjectGridPage from "../pages/Projects/ProjectGridPage";
import ProjectListPage from "../components/Projects/ListView/ProjectListPage";
import GanttPage from "../pages/Projects/GanttPage";

import FileManagerPage from "../components/FileManager/FileManagerPage";
import FileManagerLayoutTwo from "../components/FileManager/FileManagerTwo/FileManagerLayoutTwo";

import ContactMainLayout from "../components/contacts/ContactMainLayout";
import ContactsPage from "../pages/contacts/ContactsPage";
import ContactListLayout from "../components/contacts/ContactList/ContactListLayout";
import ContactListViewPage from "../pages/Contacts/ContactListViewPage";

import MyProfileLayout from "../components/MyProfile/MyProfileLayout";
import MyProfileTwoLayout from "../components/MyProfileTwo/MyProfileTwoLayout";
import MyProfileTimelineLayout from "../components/MyProfileTimeline/MyProfileTimelineLayout";

import LoginV1 from "../components/Logins/LoginV1";
import RegisiterPage from "../components/Logins/RegisiterPage";
import ForgotPassword from "../components/Logins/ForgotPassword";
import ForgetPassTwo from "../components/Logins/ForgetPassTwo";
import LockScreen from "../components/Logins/LockScreen";
import FourNot from "../components/Logins/FourNot";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================================
          AUTH ROUTES
      ================================= */}

      <Route path="/" element={<RegisiterPage />} />
      <Route path="/login" element={<LoginV1 />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/Reset-Your-Password" element={<ForgetPassTwo />} />
      <Route path="/lock-screen" element={<LockScreen />} />
      <Route path="/four-not" element={<FourNot />} />

      {/* ================================
          DASHBOARD LAYOUT
      ================================= */}

      <Route element={<Layout />}>
        <Route path="/dashboard-main" element={<Dashboard />} />

        <Route path="/tasks" element={<TaskList />} />

        <Route path="/products" element={<Products />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/customers" element={<Customers />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="/chatmail" element={<Chat />} />

        <Route path="/projects" element={<ProjectList />} />

        <Route path="/notes" element={<Notes />} />

        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* ================================
          OTHER DASHBOARDS
      ================================= */}

      <Route element={<Layout />}>
        <Route path="/dashboard-one" element={<DashboardOne />} />

        <Route path="/dashboard-two" element={<DashboardTwo />} />

        <Route path="/dashboard-three" element={<DashboardThree />} />

        <Route path="/dashboard-four" element={<DashboardFour />} />
      </Route>

      {/* ================================
          DASHBOARD FIVE
      ================================= */}

      <Route element={<DashboardFiveLayout />}>
        <Route path="/dashboard-five" element={<DashboardFive />} />

        <Route path="/dashboard-fivetwo" element={<DashboardFiveV2 />} />

        <Route path="/dashboard-six" element={<DashboardSix />} />
      </Route>

      {/* ================================
          TASKS
      ================================= */}

      <Route path="/tasks-version" element={<TaskListVersion />} />

      {/* ================================
          PROFILE
      ================================= */}

      <Route element={<ProfileLayout />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* ================================
          CALENDAR
      ================================= */}

      <Route element={<CalendarMainSidebarLayout />}>
        <Route path="/calendar" element={<Calendar />} />
      </Route>

      {/* ================================
          MAIL
      ================================= */}

      <Route element={<MainSidebarLayout />}>
        <Route path="/mail" element={<MailPage />} />
      </Route>

      {/* ================================
          CHAT MAIL
      ================================= */}

      <Route path="/chatmail" element={<ChatMailLayout />}>
        <Route index element={<ChatConversationMail />} />

        <Route path=":id" element={<ChatConversationMail />} />
      </Route>

      {/* ================================
          PROJECTS
      ================================= */}

      <Route path="/projects-details" element={<ProjectDetailsLayout />} />

      <Route path="/projects-gridpage" element={<ProjectGridPage />} />

      <Route path="/list-view-project" element={<ProjectListPage />} />

      <Route path="/gantt-chart" element={<GanttPage />} />

      {/* ================================
          FILE MANAGER
      ================================= */}

      <Route path="/file-manager" element={<FileManagerPage />} />

      <Route path="/file-manager-list" element={<FileManagerLayoutTwo />} />

      {/* ================================
          CONTACTS
      ================================= */}

      <Route path="/contacts-layout" element={<ContactMainLayout />} />

      <Route path="/contacts-pagetwo" element={<ContactsPage />} />

      <Route path="/contact-listpage" element={<ContactListLayout />} />

      <Route path="/contact-list-view" element={<ContactListViewPage />} />

      {/* ================================
          MY PROFILE
      ================================= */}

      <Route path="/myprofile-layout" element={<MyProfileLayout />} />

      <Route path="/my-profile-two" element={<MyProfileTwoLayout />} />

      <Route
        path="/my-profile-timeline"
        element={<MyProfileTimelineLayout />}
      />
    </Routes>
  );
};

export default AppRoutes;
