import { renderHook } from '@testing-library/react-hooks';
import moxios from 'moxios';
import { queryCache } from 'react-query';

import useCharacters from './useCharacters';

describe('mocking characters API request', () => {
  beforeEach(() => {
    queryCache.clear({ notify: false });
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should fetch characters list', async () => {
    moxios.stubRequest(`https://www.breakingbadapi.com/api/characters`, {
      status: 200,
      response: 'teste',
    });

    const { result } = renderHook(() => useCharacters());

    expect(result.current.state.status).toBe('loading');

    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      console.log('request', request);
    });
  });
});
