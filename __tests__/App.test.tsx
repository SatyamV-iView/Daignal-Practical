/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: import explicitly to use the types shiped with jest.
import {it, expect} from '@jest/globals';
import pageoneData from '../src/const/pageoneData.json';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Movielist from '../src/screens/Movielist';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';
import {render, screen} from '@testing-library/react-native';

it('renders correctly', () => {
  renderer.create(
    <SafeAreaProvider>
      <Movielist />
    </SafeAreaProvider>,
  );
});

it('renders FlatList correctly', () => {
  render(
    <SafeAreaProvider>
      <Movielist />
    </SafeAreaProvider>,
  );
  const element = screen.getByTestId('flat-list');
  expect(element).toBeTruthy();
});
