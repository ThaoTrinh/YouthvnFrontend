
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {browserHistory} from 'react-router'
import App from './components/App';
import Main from './components/indexComponents/Main';

import Account from './components/account/Account';

//User
import UserApp from './components/userCMS/UserApp';

import Profile from './components/userCMS/views/account/Profile';
import ResetPassword from './components/userCMS/views/account/ResetPassword';
import DeleteAccount from './components/userCMS/views/account/DeleteAccount';
import UpdateUser from './components/userCMS/views/account/UpdateUser';
import Connection from './components/userCMS/views/account/Connection';

// Organization
import OrganizationHolder from './components/organizationHolder/OrganizationHolder';
import OrganizationPage from './components/organizationHolder/OrganizationPage';
import PublicOrganization from './components/publicOrganization/PublicOrganization';
import CreateOrganization from './components/userCMS/views/organization/CreateOrganization';
import UpdateOrganization from './components/userCMS/views/organization/UpdateOrganization';
import ListOrganization from './components/userCMS/views/organization/ListOrganization';
import OrganizationDetail from './components/userCMS/views/organization/OrganizationDetail';


import ForgotPassword from './components/account/ForgotPassword';

import PublicUserCV from './components/publicCV/PublicUserCV';
import CVHolder from './components/cvHolder/CVHolder';

import RecruitmentForm from './components/userCMS/views/recruitment/RecruitmentForm';
import PublicRecruitment from './components/recruitment/PublicRecruitment';
import ApplyJob from './components/recruitment/ApplyJob';

import RecruitmentHolder from './components/recruitmentHolder/RecruitmentHolder';
import RecruitmentPage from './components/recruitmentHolder/RecruitmentPage';
import ListRecruitment from './components/userCMS/views/recruitment/ListRecruitment';
import UpdateRecruitment from './components/userCMS/views/recruitment/UpdateRecruitment';
import RecommendedCVs from './components/userCMS/views/recruitment/RecommendedCVs';
import ListApplyRecruitment from './components/userCMS/views/recruitment/ListApplyRecruitment';
import ListCandidate from './components/userCMS/views/recruitment/ListCandidate';
import CandidateDetail from './components/userCMS/views/recruitment/CandidateDetail';
import RecommendedRecruitments from './components/userCMS/views/account/jobSearch/RecommendedRecruitments';
//Admin
import AdminLogin from './components/admin/login';
import AdminApp from './components/admin/AdminApp';
import UserManagement from './components/admin/UserManagement';
import OrganizationManagement from './components/admin/OrganizationManagement' ;
import Dashboard from './components/admin/Dashboard';
import CandidateSingle from './components/CandidateComponents/SingleCandidate/candidate_single';
import RecuitmentPending from './components/admin/RecuitmentPending';


import { image } from 'superagent/lib/node/parsers';

// Import CSS


import "./assets/lib/bootstrap/css/bootstrap.min.css"
import "./assets/lib/font-awesome/css/font-awesome.min.css"
import '../semantic/dist/semantic.min.css'
import '../semantic/dist/semantic.min.js'
// import "./assets/adminLTE/css/AdminLTE.min.css"
// import "./assets/adminLTE/plugins/iCheck/square/blue.css"
// import "./assets/adminLTE/css/skins/_all-skins.min.css"
// import "./assets/adminLTE/plugins/datatables/dataTables.bootstrap.css"
import './assets/css/colors/colors.css';
import './assets/css/fonts/fontawesome-all.min.css';
import "./assets/css/index.css"
import "./assets/css/main.css"
import "./assets/css/header.css"
import "./assets/css/PopularCategory.css"
import "./assets/css/ListRecruitment.css"
import "./assets/css/account.css"
import "./assets/css/coverproject.css"
import "./assets/css/listcovers.css"
import "./assets/css/detail.css"
import "./assets/css/list.css"
import "./assets/css/ListCV.css"
import "./assets/css/profile.css"
import "./assets/css/stage.css"
import "./assets/css/feedback.css"
import "./assets/css/item.css"
import "./assets/css/sidenav.css"
import "./assets/css/magic-check.css"
import "./assets/css/footer.css"
import "./assets/css/search.css"
import "./assets/css/category.css"
import "./assets/css/event.css"
import "./assets/css/sweetalert.css"
import "./assets/css/slider.css"
import "./assets/css/payment.css"
import "./assets/css/main-slider.css"
import "./assets/css/admin/login.css"
import "./assets/css/admin/admin.css"
import "./assets/css/admin/sidebar.css"
import "./assets/css/create-recuit.css"
import "./assets/css/news.css"
import "./assets/css/list-events.css"
import "./assets/css/list-organizations.css"
import "./assets/css/recuit-detail.css"
import "./assets/css/userCMS/user.css"
import "./assets/css/userCMS/index.css"
import "./assets/css/organization.css"
import "./assets/css/public-recruitment.css"
import "./assets/css/list-item.css"
import "./assets/css/public-profile.css"
import "./assets/css/create-event.css"
import "./assets/css/news-detail.css"   
import "./assets/css/event-detail.css"
import "./assets/css/CVholder.css"
import "./assets/css/candidate-single.css"
import "./assets/css/OrganizationHolder.css"
import "./assets/css/RecruitmentHolder.css"
import "./assets/css/HowItWork.css"
import "./assets/css/FeatureCandidate.css"
import "./assets/css/TopCompany.css"
import "./assets/css/sliderItem.css"
import "./assets/css/Signin.css"

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main}></IndexRoute>
      
			<Route path="/account" component={Account}></Route>
      <Route path="/forgot-password" component={ForgotPassword}></Route>
      

      <Route path="/candidate" component={CandidateSingle}/>
      <Route path="/cvs" component={CVHolder}></Route>
      <Route path="/recruitments/:id" component={PublicRecruitment}></Route>
      <Route path="/recruitments" component={RecruitmentPage}></Route>
      <Route path="/recruitments/apply/:id" component={ApplyJob}></Route>
      <Route path="/organizations/:id" component={PublicOrganization}></Route>
      <Route path="/organizations" component={OrganizationPage}></Route>
      
    </Route>

    <Route path="/user" name="Trang chính" component={UserApp}>
      <IndexRoute component={Profile}></IndexRoute>
      <Route path="/user/account/profile" name="Hồ sơ cá nhân" component={Profile}/>
      <Route path="/user/account/reset-password" name="Đổi mật khẩu" component={ResetPassword}/>
      <Route path="/user/account/delete" name="Xóa tài khoản" component={DeleteAccount}/>
      {/* <Route path="/user/account/update" name="Cập nhật thông tin chung" component={UpdateUser}/> */}
      <Route path="/user/account/connection" name="Kết nối cộng đồng" component={Connection}/>
      <Route path="/user/account/recommended-recruitments" name="Tin tuyển dụng phù hợp" component={RecommendedRecruitments}/>

      {/* <Route path="/user/user-org" name="Tổ chức" component={Organization}/>
      <Route path="/user/organization" name="Tạo tổ chức" component={NewOrganization}/> */}
      <Route path="/user/organization/detail/:id" name="Chi tiết tổ chức" component={OrganizationDetail}/>
      <Route path="/user/organization/update/:id" name="Cập nhật tổ chức" component={UpdateOrganization}/>
      <Route path="/user/organization/create" name="Tạo tổ chức" component={CreateOrganization}/>
      <Route path="/user/organization/list" name="Tổ chức của tôi" component={ListOrganization} />
      

      <Route path="/user/recruitment/create" name="Đăng tin tuyển dụng" component={RecruitmentForm}/>
      <Route path="/user/recruitment/list" name="Tin tuyển dụng của tôi" component={ListRecruitment}/>
      <Route path="/user/recruitment/update/:id" name="Cập nhật tin tuyển dụng" component={UpdateRecruitment}/>
      <Route path="/user/recruitment/recommended-cvs/:id" name="Đề xuất hồ sơ" component={RecommendedCVs}/>
      <Route path="/user/recruitment/list-apply" name="Danh sách tin tuyển dụng đã ứng tuyển" component={ListApplyRecruitment}/>
      <Route path="/user/recruitment/list-candidate/:id" name="Danh sách ứng tuyển viên" component={ListCandidate}/>
      <Route path="/user/recruitment/:recruitmentId/:userId(/:cvCode)" name="Chi tiết hồ sơ ứng tuyển viên" component={CandidateDetail}/>
      
    </Route>

    <Route path="/admin" component={AdminLogin}></Route>
    <Route path="/admin/index" component={AdminApp}>
      <Route path="/admin/dashboard" component={Dashboard}></Route>
      <Route path="/admin/user" component={UserManagement}></Route>
      <Route path="/admin/organization" component={OrganizationManagement}></Route>
      <Route path="/admin/recuitment/pending" component={RecuitmentPending}></Route>
      
    </Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root'), // eslint-disable-line no-undef
);
