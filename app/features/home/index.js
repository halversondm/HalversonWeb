/**
 * Created by Daniel on 1/24/2016.
 */
'use strict';
import angular from 'angular';
import ui_router from 'angular-ui-router';
import routing from './home.routes';

export default angular.module('app.home', [ui_router])
    .config(routing)
    .name;