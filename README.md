# PlaywrightWebDemo
On Google search Automation and navigate to Wikipedia and take screenshot for first automation process 

Run in headed mode====
npx playwright test  tests/login.spec.ts  --project=chromium --headed
npx playwright test  tests/login.spec.ts  --project=Edge --headed
npx playwright test  tests/login.spec.ts  --project=firefox --headed

Debug========
npx playwright debug  tests/login.spec.ts  --project=chromium --headed  

codegen==========
npx playwright codegen "URL of your Application"
//It Generates the locator and different actions performed in application like- click,scroll,fill in editbox etc.
