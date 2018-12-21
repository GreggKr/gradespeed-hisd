Gradespeed HISD
=========

***NOTE:*** **I am no longer a student in the HISD school district, and so my account has been deactivated on the GradeSpeed portal. This means that the tests will fail and I will no longer be able to actively develop and maintain this package. I doubt that much will change, but I just wanted to make it clear as to why the package will be going silent and failing its CI tests.**

***UPDATE:*** **I have completely disabled the CI integration for now, as it just adds unnecessary overhead to the project.**

A package that allows for easy scraping of the GradeBook page's HTML from HISD's GradeSpeed portal.

<p align="center">
    <a href="https://nodei.co/npm/gradespeed-hisd/">
        <img src="https://nodei.co/npm/gradespeed-hisd.png?downloads=true&downloadRank=true&stars=true"
            alt="NPM"></a>
</p>
<p align="center">
    <a href="https://www.npmjs.com/package/gradespeed-hisd">
        <img src="https://img.shields.io/npm/dt/gradespeed-hisd.svg"
            alt="Downloads"></a>
    <a href="https://greenkeeper.io/">
        <img src="https://badges.greenkeeper.io/TheOdd/gradespeed-hisd.svg"
            alt="Greenkeeper"></a>
</p>

## Installation

  `npm install gradespeed-hisd`

## Usage

**Calling the function returns a `Promise` object that works as follows:**

    gradespeed(username, password)
    .then(returnArr => {
      // Handle return array of object
    })
    .catch(error => {
      // Error handling
    })

  The array returned by the function upon succeeding is:

  - `returnArr` - An **array of objects** that contain grade data that was scraped from the GradeBook page.

## Output
Outputs a file with the raw HTML for further parsing (output.txt)


## [Contributing][3]

## Notes

Right now the code is extremely messy and can be improved significantly. Both in function and style. I welcome any suggestions and PR's/issues. It currently seems to be functioning well and properly.

## ...why?

I recognize that the purpose that this package serves is extremely niche, but I found myself searching and tinkering for hours to figure out how to use a makeshift GradeSpeed API. There is no official API or documentation for it and almost nothing online. Why not make something that at the very least helped me practice making an NPM package and at the most saved someone hours of messing around and bullshit? In response to "...why?", I ask "why not?"

## Credits

I could not have done this without the hidden gem that is [@au5ton][1]'s informal [docs page][2] on the GradeSpeed portal.

[1]:https://github.com/au5ton
[2]:https://github.com/au5ton/docs/wiki/GradeSpeed-(ParentStudentConnect)
[3]:https://github.com/TheOdd/gradespeed-hisd/blob/master/CONTRIBUTING.md
