describe('sleep 2 sec', () => {
  it('sleep2', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  });
});
