import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import type { AddressInfo } from 'node:net';
import { createApp } from '../src/app.js';

test('serves collection routes under /api', async () => {
  const app = createApp();
  const server = app.listen(0);

  await once(server, 'listening');

  try {
    const address = server.address() as AddressInfo;
    const response = await fetch(`http://127.0.0.1:${address.port}/api/users/`);

    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.ok(Array.isArray(payload));
    assert.ok(payload.length > 0);
    assert.ok(payload.some((user: { name: string }) => user.name === 'Maya Chen'));
  } finally {
    server.close();
  }
});
