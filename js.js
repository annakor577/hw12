//1 HOMEWORK 14

// function delayedPromise(value, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(value);
//       }, delay);
//     });
//   }
  
//   const promises = [
//     delayedPromise("1", 1000),
//     delayedPromise("2", 2000),
//     delayedPromise("3", 1500),
//     delayedPromise("4", 2500),
//     delayedPromise("5", 500)
//   ];
  
//   Promise.all(promises)
//     .then((results) => {
//       console.log("Усі проміси вирішено:");
//       results.forEach((result, index) => {
//         console.log(`Проміс ${index + 1}: ${result}`);
//       });
//     })
//     .catch((error) => {
//       console.error("Сталася помилка:", error);
//     });


//2

// function randomDelay(value) {
//     const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(value);
//       }, delay);
//     });
//   }
  
  
//   const promise = [
//     randomDelay("1"),
//     randomDelay("2"),
//     randomDelay("3"),
//     randomDelay("4"),
//     randomDelay("5")
//   ];
  
  
//   Promise.race(promises)
//     .then((result) => {
      
//       console.log("Найшвидший проміс вирішено:");
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error("Сталася помилка:", error);
//     });
  



// HOMEWORK 13
//1

// const delay = ms => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(ms);
//       }, ms);
//     });
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  

//   delay(2000).then(logger);
//   delay(1000).then(logger);
//   delay(1500).then(logger);

//2
  
// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];
  
//   const toggleUserState = (allUsers, userName) => {
//     return new Promise(resolve => {
//       const updatedUsers = allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user,
//       );
//       resolve(updatedUsers);
//     });
//   };
  
//   const loggerr = updatedUsers => console.table(updatedUsers);
  
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);

//3

// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
  
//   const makeTransaction = (transaction) => {
//     return new Promise((resolve, reject) => {
//       const delay = randomIntegerFromInterval(200, 500);
  
//       setTimeout(() => {
//         const canProcess = Math.random() > 0.3;
  
//         if (canProcess) {
//           resolve({ id: transaction.id, time: delay });
//         } else {
//           reject(transaction.id);
//         }
//       }, delay);
//     });
//   };
  
//   const logSuccess = ({ id, time }) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
//   };
  
//   const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
//   };

//   makeTransaction({ id: 70, amount: 150 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 71, amount: 230 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 72, amount: 75 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 73, amount: 100 })
//     .then(logSuccess)
//     .catch(logError);
  

//homework12
class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.timer = document.querySelector(this.selector);
      this.daysSpan = this.timer.querySelector('[data-value="days"]');
      this.hoursSpan = this.timer.querySelector('[data-value="hours"]');
      this.minsSpan = this.timer.querySelector('[data-value="mins"]');
      this.secsSpan = this.timer.querySelector('[data-value="secs"]');
      
      this.start();
    }
  
    start() {
      this.intervalId = setInterval(() => {
        const currentTime = new Date();
        const time = this.targetDate - currentTime;
  
        if (time < 0) {
          clearInterval(this.intervalId);
          return;
        }
  
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
  
        this.updateTimer({ days, hours, mins, secs });
      }, 1000);
    }
  
    updateTimer({ days, hours, mins, secs }) {
      this.daysSpan.textContent = String(days).padStart(2, '0');
      this.hoursSpan.textContent = String(hours).padStart(2, '0');
      this.minsSpan.textContent = String(mins).padStart(2, '0');
      this.secsSpan.textContent = String(secs).padStart(2, '0');
    }
  }
  
  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2024 00:00:00'),
  });
  