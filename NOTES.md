# Problems encountered during development


1. Font awesome icons not found in the app.html
Solution:
-  missing import of "FaIconComponent" in the app.component.ts 

2. Cannot find module '@angular/ssr/node' or its corresponding type declarations
- changed the server.ts location in the ./ecom-frontend

3. Couldn't generate a angular component with nx 

- Downgraded from last version of angular to angular 18
- deleted both package-lock.json et node_modules
- downgraded node version from 23 to 20
- Installed nx globally

4. Tailwind colors not being applied

- Fixed the configuration in the tailwind.config.js and updated the daisyui settings

5. Fatal error when serving backend with NX indicating it's the java version 21 that's seems to be the problem

