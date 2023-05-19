import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './assets/global.css';
import Home from './pages/homepage/home';
import TaskOne from './pages/taskOne/taskOne';
import TaskOne1 from './pages/taskOne/taskOne1';
import TaskOne2 from './pages/taskOne/taskOne2';
import TaskOne3 from './pages/taskOne/taskOne3';
import TaskOne4 from './pages/taskOne/taskOne4';
import TaskGameOne from './pages/taskOne/taskonegame'
import Login from './pages/loginpage/login';
import Registr from './pages/regpage/registration'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/registration",
    element: <Registr/>
  },
  {
    path: "/taskOne",
    element: <TaskOne title="ᴘᴀҕотᴀ с мышью - 1 этᴀп"
    descr="Чтобы получить информацию о
    способностях компьютерной мыши,
    необходимо навести курсор на одну
    из частей мыши представленной на экране.
    Нажмите кнопку мыши под номером один."
    />
  },
  {
    path: "/taskOne/1",
    element: <TaskOne1 title="пᴇᴘвᴀя клᴀвишᴀ - лкм"
    descr="Левая кнопка мыши - основная кнопка, которую вы наиболее часто будете нажимать.
    `\n•`Функционал делится на два типа:
    `\n•`Одно нажатие, когда вы находитесь в какой-либо программе и вам надо открыть какую-либо вкладку.`\n`
    Два быстрых нажатия, когда вам необходимо открыть приложение на рабочем столе."
    />
  },
  {
    path: "/taskOne/2",
    element: <TaskOne2 title="втоᴘᴀя клᴀвишᴀ - пкм"
    descr="Правая кнопка мыши - функционал 
    этой клавиши гораздо больше и немного сложнее,
     чем на ЛКМ, поэтому о нём будет рассказано в
      видеоролике ссылка на каторы представлена ниже."
      />
  },
  {
    path: "/taskOne/3",
    element: <TaskOne3 title="тᴘᴇтья клᴀвишᴀ - скм"
    descr="Средняя кнопка мыши или колёсико мышки
     - обычно эту кнопку крутят назад и вперёд,
      чтобы перемещаться вверх или вниз по 
      окну,сайту и так далее. Также можно нажать 
      один раз, чтобы перемещаться по вкалдке 
      браузера вверх или вниз. В некоторых приложениях 
      бывает дополнительный функционал у СКМ."
      />
  },
  {
    path: "/taskOne/3",
    element: <TaskOne4 title="чᴇтвᴇᴘтᴀя клᴀвишᴀ"
    descr="У калвиши под номером 4 нет определённого название, но есть функционал.
    Эта кнопка встречается не на всех мышках, и при нажатии изменяет cpi(Сounts Per Inch).
    Значение cpi настраивается в специальном приложение 
    для мыши, которое либо идёт в комплекте, 
    либо устанавливается с официального сайта
     производителя мыши.От значение cpi зависит то, 
     насколько быстро перемещается курсор от вашего
      движения мышкой."
      />
  },
  {
    path: "/taskOne/game",
    element: <TaskGameOne title="ᴘᴀҕотᴀ с мышью - 1 этᴀп"
    descr="Чтобы получить информацию о
    способностях компьютерной мыши,
    необходимо навести курсор на одну
    из частей мыши представленной на экране.
    Нажмите кнопку мыши под номером один."
    />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)