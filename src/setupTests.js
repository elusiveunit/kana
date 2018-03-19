/* eslint-disable import/no-extraneous-dependencies */

import { configure as configureEnzyme } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

configureEnzyme({ adapter: new EnzymeAdapter() });
