<p align="center">
  <h1>Repro for NestJS with dynamic module and service injection</h1>
</p>

<hr>

While writing this project to reproduce the issue I was discussing on NestJS discord, I actually couldn't reproduce it on this simple app. I knew the problem came from the rest of my application. Going back at it, I matched the set up I add on this repro and the problem was solved.

You can run the code with `npm start`. You'll notice there is no injection error and everything is properly initialized.
