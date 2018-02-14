import $ from 'jquery';
import './styles/styles.css';

import navbarTemplate from './templates/navbar.html';

const $root = $('#root');
$root.append(navbarTemplate);

const pageContent = '<div class="page-content"></div>';
$root.append(pageContent).css(('margin-top'), $('.navbar').outerHeight());

$('.page-content').empty().append(`<div class="welcome">
                        <h1>Welcome to neutrino Project</h1>
                        <h2>With EsLint</h2>
                      <img src="https://img00.deviantart.net/7a71/i/2012/346/2/c/cool_cat_shirts_by_design_by_humans-d5ntc2g.png" alt="cool cat">
                      </div>`);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
