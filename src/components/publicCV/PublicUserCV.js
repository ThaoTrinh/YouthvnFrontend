import React from 'react';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';

import swal from 'sweetalert';
import UserCV from '../share/UserCV';
import SimUserCVs from './SimUserCVs';
import request from 'superagent';
import _ from 'lodash';
import async from 'async';
import Spinner from 'react-spinkit';
import loading from '../../assets/icon/Rolling.gif';
