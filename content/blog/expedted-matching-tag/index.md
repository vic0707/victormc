---
title: Expected closing tag to match indentation of opening
description: Expected closing tag to match indentation of opening
date: "2019-10-13T21:13:17.354Z"
---
If use semistandard with React and decided to update to version 14, you might have encountered the following error when linting your code:

<pre>
  error  Expected closing tag to match indentation of opening  react/jsx-closing-tag-location
</pre>

My guess is that your code looks something like this:

<pre>
  return <div>
    <Component />
  </div>;
</pre>

Your first intuition to solve this issue could be to say: "Oh, I just need to indent the closing div, to match the opening one" (or at least that happened to me).

So you go aheead and try this:
<pre>
  return <div>
           <Component />
         </div>;
</pre>

And now you get this:
<pre>
  error  Expected indentation of 2 space characters but found 9  react/jsx-indent
</pre>

And so you scratch your head because if you put back the indentation of 2 you get the previous error. So... how do you get yourself out of this problem?

Well, you do so, with the help of some very useful and clarifying parenthesis. They will make semistandard happy, but more importanly, they will make your code cleaner and easier to read.

This is how it would look:
<pre>
  return (
    <div>
      <Component />
    </div>
  );
</pre>

Voila! No more linting errors.

Till next time.

V.
