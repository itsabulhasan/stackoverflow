import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import withPageTitle from './components/withPageTitle/withPageTitle';
import LayoutWrapper from './components/LayoutWrapper/LayoutWrapper.component';
import RegisterPage from './pages/Register/RegisterPage';
import AllTagsPage from './pages/AllTagsPage/AllTagsPage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';
// import AskQuestionPage from './pages/AskQuestionPage/AskQuestionPage';
import AdminAnalytics from './components/admin-analytics/AdminAnalytics';
import Post from "./pages/Post/Post"
//import AskQuestionPage from './pages/AskQuestionPage/AskQuestionPage';

// const Register = withPageTitle({
//   component: RegisterPage,
//   title: "Sign Up - Stack Overflow",
// })

//import TagPage from './pages/TagPage/TagPage';

const AllTagsPageComponent = withPageTitle({
	component: LayoutWrapper({ component: AllTagsPage }),
	title: 'Tags - CLONE Stack Overflow',
});

const QuestionsPageComponent = withPageTitle({
	component: LayoutWrapper({ component: QuestionsPage }),
	title: 'All Questions - CLONE Stack Overflow',
  });

const IndividualPost = withPageTitle({
	component: LayoutWrapper({ component: Post }),
	title: 'Post - CLONE Stack Overflow',
});
  
  const AdminAnalyticsComponent = withPageTitle({
	component: LayoutWrapper({component: AdminAnalytics}),
	title: 'Admin Analytics',
  });

const RoutesTree = () => {
	return (
		<Routes>
			<Route
				exact
				path="/questions"
				element={<QuestionsPageComponent />}
			/>
			<Route
				exact
				path="/add/question"
				element={<AllTagsPageComponent />}
			/>
			<Route exact path="/questions" element={<QuestionsPageComponent />} />
			{/* <Route exact path="/add/question" element={< />} /> */}
			{/* <Route exact path='/tags/:tagname' component={TagPageComponent} /> */}
			<Route exact path='/questions/:id' element={<IndividualPost />} />
			<Route exact path="/tags" element={<AllTagsPageComponent />} />
			<Route exact path="/register" element={<RegisterPage />} />
			<Route exact path="/login" element={<LoginPage />} />
			<Route exact path="/admin/analytics" element={<AdminAnalyticsComponent />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default RoutesTree;
