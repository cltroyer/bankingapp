export const act_inc = 'INCREMENT'
export const act_dec = 'DECREMENT'

export function createDeposit(value, account){
    return {
      type: act_inc,
      value: value,
      account: account
    }
  }
  
  export function createWithdraw(value, account){
    return {
      type: act_dec,
      value: value,
      account: account
    }
  }
  