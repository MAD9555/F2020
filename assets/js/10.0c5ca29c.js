(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{162:function(t,e,s){"use strict";s.r(e);var i=s(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("::: Note\nThese are generic instructions about getting started with new repos to use in your assignments.\n:::")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),s("ul",[s("li",[s("Badge",{attrs:{text:"Warning"}})],1),t._v(" "),t._m(10)]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),s("p",[t._v("Additional "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=EdEWigP6zxQ&list=PLyuRouwmQCjmYaG21ijCw0KrFiFEG0Oh9",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git CLI Reference Playlist"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("router-link",{attrs:{to:"./"}},[t._v("Back to the Assignment List")])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"steps-to-follow-to-set-up-a-repo-for-an-assignment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-follow-to-set-up-a-repo-for-an-assignment","aria-hidden":"true"}},[this._v("#")]),this._v(" Steps to Follow to set up a Repo for an Assignment")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-always-start-with-your-own-repo-on-github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-always-start-with-your-own-repo-on-github","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Always Start with Your Own Repo on GitHub")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Create a "),s("strong",[t._v("Private")]),t._v(" GitHub Repo called "),s("code",[t._v("whatever the assignment asked you to create")]),t._v(" on your GitHub account, with "),s("strong",[t._v("NO")]),t._v(" README.md file.")]),t._v(" "),s("li",[t._v("On the GitHub settings for your repo, set your master branch as the gh-pages branch.")]),t._v(" "),s("li",[t._v("On the GitHub settings for your repo, go to the "),s("code",[t._v("Collaborators")]),t._v(" tab and invite your instructor to the repo as a collaborator. On GitHub, Steve's username is "),s("code",[t._v("prof3ssorst3v3")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2a-using-a-copy-of-an-instructor-s-repo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2a-using-a-copy-of-an-instructor-s-repo","aria-hidden":"true"}},[this._v("#")]),this._v(" 2a. Using a Copy of an Instructor's Repo")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Sometimes you will start with a repo provided by your instructor. If you do "),s("strong",[t._v("NOT")]),t._v(" have one of these then skip to "),s("strong",[t._v("step 3")]),t._v(".")]),t._v(" "),s("li",[t._v("Start in Terminal (MacOS) or Command Shell (Windows) by navigating to the folder where you want to create your own copy of the repo.")]),t._v(" "),s("li",[t._v("Next, clone their repo Eg: https://github.com/instructorsname/reponame on to your computer by typing the following in the Terminal:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git clone https://github.com/instructorsname/reponame.git reponame\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Make sure you change the user name and repo names to the proper ones.")]),t._v(" "),s("li",[t._v("the second "),s("code",[t._v("reponame")]),t._v(" is the name of the folder you will be creating.")]),t._v(" "),s("li",[t._v("Next "),s("strong",[t._v("DELETE")]),t._v(" the "),s("code",[t._v(".git")]),t._v(" folder inside your reponame folder with the following commands:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("cd reponame\nrm -rf .git\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("replace "),e("code",[this._v("reponame")]),this._v(" with your actual folder name.")]),this._v(" "),e("li",[this._v("Now we need to turn our folder into a Git repo on our computer and point it at the one that we created on GitHub.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git init\ngit remote add origin https://github.com/[YOUR USERNAME]/reponame.git\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("IF")]),this._v(" you did create a repo with a "),e("code",[this._v("README.md")]),this._v(" file on GitHub or you changed the repo or added files through the GitHub interface then we need to download that file before adding our own. Type this to download all files from your own repo on GitHub:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git pull -u origin master\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If there was nothing new to download then the "),e("code",[this._v("pull")]),this._v(" command will give a warning.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2b-starting-with-your-own-github-repo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2b-starting-with-your-own-github-repo","aria-hidden":"true"}},[this._v("#")]),this._v(" 2b. Starting with Your Own Github Repo")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("If you were not provided with a starter repo, and just created one of your own on GitHub then the steps are similar.")]),this._v(" "),e("li",[this._v("You will need to clone your own repo from GitHub to a local folder.")]),this._v(" "),e("li",[this._v("Start by navigating with Terminal (MacOS) or Command Shell (Windows) to the place where you want to create the repo.")]),this._v(" "),e("li",[this._v("Next clone your repo by typing the following:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git clone https://github.com/[YOUR USERNAME]/reponame.git reponame\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("replace the username and reponame with your own.")]),this._v(" "),e("li",[this._v("the second "),e("code",[this._v("reponame")]),this._v(" is the name of the folder you will be creating.")]),this._v(" "),e("li",[this._v("finally, navigate into your repo folder.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("cd reponame\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Change the name of the folder to the one you created.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-adding-starter-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-adding-starter-files","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Adding Starter Files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Sometimes you will have files that are provided for your assignment, like HTML or CSS or images in a Zip file on BSLMS. These need to be copied into the repo folder and then we need to tell Git to keep track of the files.")]),this._v(" "),e("li",[this._v("In your Terminal (MacOS) | Command Shell (Windows), you should be inside your "),e("code",[this._v("reponame")]),this._v(" folder and type the following:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('git add -A\ngit commit -m "first files"\ngit push -u origin master\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4-modifying-your-repo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-modifying-your-repo","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. Modifying your Repo")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("EVERY")]),this._v(" time you want to save your changes locally and then upload, use these same commands:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('git status\ngit add -A\ngit commit -m "description of your changes"\ngit push -u origin master\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])}],!1,null,null,null);r.options.__file="github.md";e.default=r.exports}}]);