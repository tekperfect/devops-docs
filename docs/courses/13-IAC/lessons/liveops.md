# LiveOps (An Online Game Available to Anyone, Everyone, Everywhere)

## Overview

1. Build a local development environment that will allow you to run a web based game
2. Test and troubleshoot the development environment and create a template of it for future use
3. Deploy a sandbox environment in AWS that consists of a Dev server where you can test and break your code, a QA environment where code is placed after it has been peer reviewed and tested, and a production environment where live games are available to a small subset of individuals.
4. Create live game demo using code that already exists
5. Create a customized version of an existing game(s).
6. Secure the live game environment so that unauthorized users cannot get access to the environment
7. Iterate on the customized game or build a new game
8. Open the game up for beta testing from friends, family, and partners
9. Create CI/CD pipeline for the game
10. Setup monitoring, performance benchmarking, and clustering for game using Kubernetes
11. Expand beta of game to broader community of people
12. Open game so that it can be played by anyone

## Installation and Prep

### Server Environment

- Ubuntu Server

- Apache

- Phaser

- Nodejs

- NPM

- PHP


### Example Project 👇🏾

This is an example project that will allow you to verify that your server is setup correctly

sudo git clone https://github.com/gamecook/phaser-project-template.git

This is a set of sample projects that will give you a idea of what you can build and run 

sudo git clone https://github.com/photonstorm/phaser-examples.git


### Environment Prep Commands 👇🏾

`sudo apt install apache2`

`sudo apt install nodejs`

`sudo apt install npm`

`sudo apt install php`

`npm install -g grunt-cli`

`sudo chown -R www-data:www-data /var/www/*`

`systemctl restart apache2`

Edit the `/etc/apache2/sites-enabled/000-default.conf` and point it at your project directory

The apache2 default directory is `/var/www/html`

## Why do we want to do this?

We want to build reliale, scaleable, efficient, and professional games, software, and infrastructure that does not require babysitting or large DevOps and Engineering resources.

## How do we do it?

With CI/CD?

CI/CD is process of developing games in way that allows you to iterate and deploy new features, characters, or enhancements in a consistent manner. When changing code is done systematically, development release can be performed frequently and efficiently

“CI/CD” stands for the combined practices of Continuous Integration (CI) and Continuous Delivery (CD).

Continuous Integration is a prerequisite for CI/CD, and requires:

Developers to merge their changes to the main or master branch
Each code merge triggers an automated code build and test sequence. Developers ideally receive results in a short period of time, so that they don't push broken code to production.

The role of Continuous Integration is to produce product that can be deployed. The role of automated tests in CI is to verify that the product for the given version of code is safe to be deployed.

In the practice of Continuous Delivery, code changes are also continuously deployed, although the deployments are triggered manually. If the entire process of moving code from source repository to production is fully automated, the process is called Continuous Deployment.

The measurement of if you are truly running a CI/CD environment is if any developer in your team can push code through dev and staging to proudciton then your team is successfully CI/CD'ing (Is that a word?)

CI/CD principles
Continuous Delivery practices take CI further by describing principles for successful production deployments:

Architect the system in a way that supports iterative releases. Avoid tight coupling between components. Implement metrics that help detect issues in real-time.

Practice test-driven development to always keep the code in a deployable state. Maintain a comprehensive and healthy automated test suite. Build in monitoring, logging, and fault-tolerance by design.

Work in small iterations. For example, if you develop in feature branches, they should live no longer than a day. When you need more time to develop new features, use feature flags.

Developers can push the code into production-like staging environments. This ensures that the new version of the software will work when it gets in the hands of users.

Anyone can deploy any version of the software to any environment on demand, at a push of a button. If you need to consult a wiki on how to deploy, it’s game over.

If you build it, you run it. Autonomous engineering teams should be responsible for the quality and stability of the software they build. This breaks down the silos between traditional developers and operations groups, as they work together to achieve high-level goals.

To make CI/CD a reality, you need to automate everything that you can in the software delivery process and run it in a CI/CD pipeline.

CI/CD is much more than the automation of tasks to avoid human error. It lets us get new solutions into the hands of users as quickly, efficiently and cheaply as possible.

Software development is always an exercise in learning, discovery and experimentation. If you read the Accelerate book, State of DevOps report, the numbers tell us that organizations that practice continuous delivery produce higher-quality software more quickly. The people working on it enjoy it more and the organizations that practice it make more money.

Deliver software with less risk. CI/CD pipelines standardize release processes across projects. By testing every change in source code, we reduce the chances of introducing bugs.

Release new features more frequently. A CI/CD pipeline can visualize your entire path from commit to production in a single screen. You can navigate across stages, spot inefficiencies, and optimize your process. By removing the roadblocks to productivity, you enable your company to succeed.

Deliver the product that users need. Delivering updates often leads to more user feedback. You can take advantage of that by A/B testing features, or testing early versions of products with real customers. This way you avoid investing too much in features that your customers don’t need, and focus on those that matter.

Improve developer productivity. Engineering teams that don’t practice CI/CD often work under stress. There are constant fires for bad deploys and hard-to-fix outages. Developers write a lot of code that never gets used. Long-lived feature branches are too big to get proper peer review, so code degrades in quality. On the other hand, CI/CD guides product management to optimize for user impact. Developers deploy code while it’s fresh in their minds. The result is a happy engineering team.

The benefits of CI/CD compound: fast deploy cycles lead to less risky and more frequent updates, which lead to faster learning and more user feedback, which leads to happy developers building better products.

What are the benefits of CI/CD?

CI/CD is much more than the automation of tasks to avoid human error. It lets us get new solutions into the hands of users as quickly, efficiently and cheaply as possible.


Software development is always an exercise in learning, discovery and experimentation. […] If you read the Accelerate book, State of DevOps report, the numbers tell us that organizations that practice continuous delivery produce higher-quality software more quickly. The people working on it enjoy it more and the organizations that practice it make more money.

Deliver software with less risk. CI/CD pipelines standardize release processes across projects. By testing every change in source code, we reduce the chances of introducing bugs.

Release new features more frequently. A CI/CD pipeline can visualize your entire path from commit to production in a single screen. You can navigate across stages, spot inefficiencies, and optimize your process. By removing the roadblocks to productivity, you enable your company to succeed.

Deliver the product that users need. Delivering updates often leads to more user feedback. You can take advantage of that by A/B testing features, or testing early versions of products with real customers. This way you avoid investing too much in features that your customers don’t need, and focus on those that matter.

Improve developer productivity. Engineering teams that don’t practice CI/CD often work under stress. There are constant fires for bad deploys and hard-to-fix outages. Developers write a lot of code that never gets used. Long-lived feature branches are too big to get proper peer review, so code degrades in quality. On the other hand, CI/CD guides product management to optimize for user impact. Developers deploy code while it’s fresh in their minds. The result is a happy engineering team.

The benefits of CI/CD compound: fast deploy cycles lead to less risky and more frequent updates, which lead to faster learning and more user feedback, which leads to happy developers building better products.

When is CI/CD not feasible?

“Continuous Delivery is great but won’t work with my project.” There are indeed some cases when CD may not be suitable:

Your customers don’t want continuous updates to their systems.
Regulations restrict how software can be updated. For example, continuously updating software used in aerospace, telecom, and medical industries is not an option.
Even in a CD-averse environment, teams can enjoy the benefits of easy deployment and keeping the system in a deployable state. They can also practice and reap the benefits of CI to the full extent.

For a more in-depth look into CI and its best practices, read Semaphore’s guide to Continuous Integration.

A typical journey to CI/CD
If you’re used to long development cycles, you will need to change your mindset.

But if you are considering to adopt CI/CD, you’ve made an important first step!

Think of anything that gets in the way of practicing CI/CD as technical debt, and treat it as such. Estimate work that needs to be done. Set clear expectations with all stakeholders, and schedule a time to work on it.

There are two major milestones on your journey to CI/CD success. The first is to implement CI: fast, reliable and frequent integrations. The second is to implement CD: automate deployment, make it a push-button operation, and make it easy to test new code in production-like environments.

Getting to more frequent integrations

The first thing is to start treating master as if you would deploy it at any time. Since you haven’t done this before, it will be hard. But it’s a start of doing something painful often until it stops being painful.

Treat every test failure as a bug. This includes flaky tests. Extract the log, investigate and fix it. Regardless of what the test was for, you can’t close the issue until it’s fixed.

Improve your test suite. You may need to rewrite some code to make tests more reliable. Have all developers commit to writing tests as carefully as they write production code. After a while, you’ll reach a point where a failed test means there’s a real bug. Eventually, you’ll hit 100% green CI builds. That’s your first mountain. Celebrate it!

Stop using long-lived feature branches and start branching by abstraction using feature flags. This way everyone’s pushing to master and it’s easy to test features in development with the rest of the system. So you can detect issues right away instead of after merging months later.
