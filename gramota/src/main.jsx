import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './assets/global.css';
import Home from './pages/homepage/home';
import TaskOne from './pages/taskOne/taskOne';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/taskone",
    element: <TaskOne title="ᴘᴀҕотᴀ с мышью - 1 этᴀп"
    descr="Чтобы получить информацию о
    способностях компьютерной мыши,
    необходимо навести курсор на одну
    из частей мыши представленной на экране.
    Нажмите кнопку мыши под номером один."/>
  },
  {
    path: "/taskone/1",
    element: <TaskOne title="пᴇᴘвᴀя клᴀвишᴀ - лкм"
    descr="Левая кнопка мыши - основная кнопка, которую вы наиболее часто будете нажимать.
    `\n•`Функционал делится на два типа:
    `\n•`Одно нажатие, когда вы находитесь в какой-либо программе и вам надо открыть какую-либо вкладку.`\n`
    Два быстрых нажатия, когда вам необходимо открыть приложение на рабочем столе."/>
  },
  {
    path: "/taskone/2",
    element: <TaskOne title="ᴘᴀҕотᴀ с мышью - 1 этᴀп"
    descr="Чтобы получить информацию о
    способностях компьютерной мыши,
    необходимо навести курсор на одну
    из частей мыши представленной на экране.
    Нажмите кнопку мыши под номером один."/>
  },
  {
    path: "/taskone/3",
    element: <TaskOne title="ᴘᴀҕотᴀ с мышью - 1 этᴀп"
    descr="Чтобы получить информацию о
    способностях компьютерной мыши,
    необходимо навести курсор на одну
    из частей мыши представленной на экране.
    Нажмите кнопку мыши под номером один."/>
  },
  {
    path: "/taskone/4",
    element: <TaskOne title="ᴘᴀҕотᴀ с мышью - 1 этᴀп"
    descr="Чтобы получить информацию о
    способностях компьютерной мыши,
    необходимо навести курсор на одну
    из частей мыши представленной на экране.
    Нажмите кнопку мыши под номером один."/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>

)