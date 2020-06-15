import { VerifyAccountNumberPipe } from './verify-account-number.pipe';

describe('VerifyAccountNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new VerifyAccountNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
