/* eslint-disable no-console */
/* global M */

// Incorporando estilos
import './styles/mystyle.css';

/* Inicializando elementos de materializecss */
document.addEventListener('DOMContentLoaded', () => {
  // Obteniendo la referencia a la barra de navegacion
  // lateral

  const sideNavs = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sideNavs);

  // Inicializando los Dropdown
  const dropdown = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(dropdown);
});
