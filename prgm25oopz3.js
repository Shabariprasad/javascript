class Bank{
    accountDetails={
        1000:{acno:1000,username:"userone",password:"userone",balance:50000},
        1001:{acno:1001,username:"usertwo",password:"usertwo",balance:5000},
        1002:{acno:1002,username:"userthree",password:"userthree",balance:10000},
        1003:{acno:1003,username:"userfour",password:"userfour",balance:6000},
        }

        //method validate account number
        validateAccount(acno){
        return acno in this.accountDetails?true:false
        }
        //method authenticate account

        authenticateAccount(acno,pswd){
            if(this.validateAccount){
                if(this.accountDetails[acno].password==pswd){
                    console.log('authentication sucessful');
                }
                else{
                    console.log('invalid password');
                }
            }
            else{
                console.log('invalid account');
            }
        }

        //method balance enquire

        getbalance(acno,pswd){
            if(this.validateAccount(acno)){
                if(this.accountDetails[acno].password==pswd){
                    console.log(`account balace of ${acno} is ${this.accountDetails[acno].balance}`);
                }
                else{
                    console.log(`invalid password`);
                }
            }
            else{
                console.log(`invalid account`);
            }
        }

        //method for fund transfer

        fundtransfer(fromacno,toacno,amount){
            if(this.validateAccount(fromacno) && this.validateAccount(toacno)){
                if(this.accountDetails[fromacno].balance>=amount){
                    console.log(`current balace of ${fromacno} is ${this.accountDetails[fromacno].balance} \n current balance of ${toacno} is ${this.accountDetails[toacno].balance}`);
                    this.accountDetails[fromacno].balance-=amount
                    this.accountDetails[toacno].balance+=amount
                    console.log(`final balance of ${fromacno} is ${this.accountDetails[fromacno].balance} \n final balance of ${toacno} is ${this.accountDetails[toacno].balance}`);
                }
                else{
                    console.log(`insaficent balance`);
                }
            }
            else{
                console.log(`invalid account`);
            }
        }

}

//object
const user1= new Bank()
console.log(user1.validateAccount(1007)?'account available':'account unavailable');

console.log(`......................................................................`);

user1.authenticateAccount(1002,'userthree')

console.log(`......................................................................`);

user1.getbalance(1001,'usertwo')

console.log(`......................................................................`);

user1.fundtransfer(1000,1001,1000)
