import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectPage } from './pages/ProjectPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ArticlePage } from './pages/ArticlePage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';

import { useDispatch } from 'react-redux';
import { setProjectData } from './features/Project/projectSlice';
import { client } from './client';
import { setArticleData } from './features/Article/articleSlice';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: 'projects', element: <ProjectPage /> },
  { path: 'projects/:id', element: <ProjectDetailPage /> },
  { path: 'articles', element: <ArticlePage /> },
  { path: 'articles/:id', element: <ArticleDetailPage /> },
  { path: 'about', element: <AboutPage /> },
  { path: 'contact', element: <ContactPage /> },
];

function App() {
  const dispatch = useDispatch();
  const fetchProjectData = (data) => {
    dispatch(setProjectData({ project: data.items }));
  };
  const fetchArticleData = (data) => {
    dispatch(setArticleData({ article: data.items }));
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: 'project',
      })
      .then((data) => {
        fetchProjectData(data);
      })
      .catch(console.error);

    client
      .getEntries({
        content_type: 'article',
      })
      .then((data) => fetchArticleData(data))
      .catch(console.error);
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map(({ path, element }, i) => (
          <Route key={i} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
