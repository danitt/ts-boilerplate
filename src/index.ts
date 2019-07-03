import { sayHello } from './hello-world';

// IIFE
(async (): Promise<void> => {
    console.info(sayHello());
    process.exit();
})();
