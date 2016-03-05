/* global angular */

'use strict'

/* Bibliotecas do Angular */
require('angular')
require('angular-route')

/* Inicializa o app Angular */
var app = angular.module('HackathonApp', [
  'ngRoute'
])

/* Carrega os seviços para acesso a dados */
require('./services/regioes')

/* Carrega os controllers */
require('./controllers/home')
