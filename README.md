# M4C Dev Test

This is an example project with a few errors added to get an idea of your debugging process. We're more interested in your process and thinking than in specific knowledge/experience.


**The main point is to spend a brief time debugging this demo app, and be prepared to discuss your approach and thoughts about it.**

You should spend less than an hour with this (though if you choose to take more time that's fine). If you get stuck, that's fine too. Don't feel pressured to spend any more than 30-60 mins, you can just upload what you have and discuss it with us, since our main focus is on process and approach, not expertise in JavaScript, Webpack, or any of the technologies used here.

**Again, the main point is to spend a brief time debugging this demo app, and be prepared to discuss your approach and thoughts about it.**

## Prerequisites

- [Node](https://nodejs.org/en/download/)
- Either [Yarn](https://yarnpkg.com/getting-started/install) or [NPM](https://www.npmjs.com/get-npm)

## Installation

**Note:** Yarn is used in these examples, but NPM works equally, with `npm install` and `npm run start` in place of `yarn` and `yarn start`.

```bash
cd <downloaded-repo-dir>
yarn
```

## Usage
```bash
#In same directory as above (<downloaded-repo-dir>)
yarn start
```

Once you have installed the dependencies and started the dev env (barring any bundler issues), the app will be available at http://localhost:8080/. The mock API has a UI at http://localhost:3000/

## Assignment

### Git branch
- **Create a new branch off the master branch**
- **Name your new branch using your first and last name separated by a dot (first.last)**
- **Commit changes to your branch**

### Coding
- **Fix the build error preventing Webpack from compiling**
- **Fix the JavaScript error breaking the video Display**

- **Display the videos evenly spaced in the available space**
- **Display only videos from Category 1**

## Extra Credit (Optional, if you want to show off)

* Add your own improvement in UI/UX, coding, build, anything/anywhere you like.
 * Some suggestions:
    * add UI/UX for users to filter the video display  by category
    * Reverse the order of the content blocks
    * Improve UX of video viewing (watching in small size isn't the best, and not all users know how to go fullscreen)
    * Add SSL/HTTPS capability to the dev env

## Upload

### Clean, Bundle and Zip

```bash
## Remove untracked files to reduce size
git clean -Xdf
## Bundle the repo, using the firstname.lastname naming convention
git bundle create firstname.lastname.bundle --all
## Zip the bundle
zip firstname.lastname.zip firstname.lastname.bundle
```

### Upload files
[Upload your completed test here](https://script.google.com/macros/s/AKfycbyneI1gKowFZPS6y9TkJneDgIurqwHHX_6fsJFBBvebwJ0n0s2Sw1xLKFYzvLJeP_Xj/exec)

You will need the form password: bavgik^^69U2UJ
