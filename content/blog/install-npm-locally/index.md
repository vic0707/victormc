---
title: How to install a npm package locally
description: How to install a npm package locally
date: "2019-10-06T21:13:17.354Z"
---
Let's say you just found an npm package that does exactly what you where looking for. You go ahead and do:

<pre>
  npm install magic-package
</pre>

And when you try to run your code, for some reason it is not working like you expected.

You have several options now, either you go ahead and try to find a different package that does what you want, you try to build it yourself or you try to fix this `magic-package`.

Since you always wanted to contribute to open source, you decide to fork this package and try to fix it. You figure someone else might appreaciate it... Always good to get some good karma.

After having forked and fixed the issue, you realize that in order to test and ensure that your fix actually solved the issue, you need to run it in your original piece of code. So, since you can't merge and publish this change to npm, how could you achieve this?

The easiest way to do this is to install your local copy of the package in your original program. In order to achieve this, you need to run the following command:

<pre>
  npm install /local/path/to/magic-package
</pre>

That's it! Just use the path where your local version of the package is and install it. You should see something like this in your `package.json` file.

<pre>
  "magic-package": "file:../../path/to/local/magic-package"
</pre>

Hope this helps.

Till next time.

V.
