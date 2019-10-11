jest.setTimeout(10000);

describe('sleep 5 sec', () => {
  it('sleep5', async () => {
    await new Promise(resolve => setTimeout(resolve, 4000));
  });
});
