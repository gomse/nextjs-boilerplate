/**
 * @jest-environment node
 */
import { GET } from './route';

describe('/api route', () => {
  it('GET', async () => {
    const response = await GET();
    const { hello } = await response.json();

    expect(hello).toBe('world');
  });
});
