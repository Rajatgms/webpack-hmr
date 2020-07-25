import structure from './structure';
import themeHandler from './themeHandler';
import './style.css';

structure.forEach(element => document.body.appendChild(element));
themeHandler();
