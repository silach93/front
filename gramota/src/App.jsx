import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './assets/global.css';
import Home from './pages/homepage/home';
import TaskOne from './pages/taskOne/taskOne';
import TaskOne1 from './pages/taskOne/taskOne1';
import TaskOne2 from './pages/taskOne/taskOne2';
import TaskOne3 from './pages/taskOne/taskOne3';
import TaskOne4 from './pages/taskOne/taskOne4';
import TaskGameOne from './pages/taskOne/taskonegame'
import ErrorPage from "./pages/ErrorPage/Error-page";
import Login from './pages/loginpage/login';
import Registr from './pages/regpage/registration'
import InputTask from "./pages/inputTask/inputTask";

const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registration",
    element: <Registr />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/taskOne",
    element: <TaskOne
      title="ᴘᴀҕотᴀ с мышью - 1 этᴀп"
      descr="Чтобы получить информацию о
    способностях компьютерной мыши,
    необходимо навести курсор на одну
    из частей мыши представленной на экране.
    Нажмите кнопку мыши под номером один."
    />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/taskOne/1",
    element: <TaskOne1
      title='пᴇᴘвᴀя клᴀвишᴀ - лкм'
      descr='Левая кнопка мыши - основная кнопка, которую вы наиболее часто будете нажимать.
    \n•Функционал делится на два типа:
    \n•Одно нажатие, когда вы находитесь в какой-либо программе и вам надо открыть какую-либо вкладку.\n
    Два быстрых нажатия, когда вам необходимо открыть приложение на рабочем столе.'
    />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/taskOne/2",
    element: <TaskOne2
      title="втоᴘᴀя клᴀвишᴀ - пкм"
      descr="Правая кнопка мыши - функционал 
    этой клавиши гораздо больше и немного сложнее,
     чем на ЛКМ, поэтому о нём будет рассказано в
      видеоролике ссылка на каторы представлена ниже."
    />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/taskOne/3",
    element: <TaskOne3
      title="тᴘᴇтья клᴀвишᴀ - скм"
      descr="Средняя кнопка мыши или колёсико мышки
     - обычно эту кнопку крутят назад и вперёд,
      чтобы перемещаться вверх или вниз по 
      окну,сайту и так далее. Также можно нажать 
      один раз, чтобы перемещаться по вкалдке 
      браузера вверх или вниз. В некоторых приложениях 
      бывает дополнительный функционал у СКМ."
    />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/taskOne/4",
    element: <TaskOne4
      title='ᴘᴀҕотᴀ с мышью - 2 этᴀп
      пᴇᴘᴇход к пᴘᴀктикᴇ'
      descr='На следующей странице у Вас будет 
      практическое задание. Иногда случаются 
      такие моменты, когда даже опытный 
      пользователь ПК не может найти курсор 
      на экране'
    />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/taskOne/game",
    element: <TaskGameOne
      title="пᴘᴀвилᴀ игᴘы"
      descr="На экране поле с шариками.
    Необходимо найти шарик другого цвета,
    навести на него курсор и кликнуть по
    нему левой кнопкой мыши."
    />,
    errorElement: <ErrorPage />,
  }
  ,
  {
    path: "/taskTwo",
    element: <InputTask text='Вам нужно написать текст.' />,
    errorElement: <ErrorPage />,
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
