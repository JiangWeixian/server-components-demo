/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {createFromFetch} from 'react-server-dom-webpack';

const cache = new Map();

export function useRefresh() {
  return function refresh(key, seededResponse) {
    // do nothing
  };
}

export function useServerResponse(location) {
  const key = JSON.stringify(location);
  let response = cache.get(key);
  if (response) {
    return response;
  }
  response = createFromFetch(
    fetch('/react?location=' + encodeURIComponent(key))
  );
  cache.set(key, response);
  return response;
}
