import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/index.ts'
import Feedback from './Pages/Feedback/Feedback.tsx'
import Result from './Pages/Result/Result.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feedback />,
  },
  {
    path: "/result",
    element: <Result/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
