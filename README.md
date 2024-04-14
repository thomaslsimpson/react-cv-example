
+ TLSCV
    + Header
        + Contact
        + About
    + Paths
        + Product Manager
            + Defined
            + Machine Learning
            + Article: the misuse of terms in Product Management
        + Software Architect
            + Defined
        + Software Engineer
            + Defined
        + Software Developer
            + Defined
    + Timeline
    + Footer

# Step 1: Create the Empty Component

First, I created a blank CVContainer.js component. It did nothing. But, by setting this up, I was able to make sure that
React is working probperly, that my build tools are working properly, and I can even deploy to the product site to make 
sure that my deployment is working.

CI means working in tiny increments and deploying these all he time. It means maintaining a build that always works.

# Step 2: Make the Basic React Features work

Next, I change the React functions to classes and added support for passing elements and for rendering children. Again, this
was done in a tiny increment, with very little typing and the testing was trivial.

Anytime we want to, we can run `npm run build` and the entire single page application is dumped into the 'build' directory.


