---
title: tutorial
permalink: /tutorial
tags: []
keywords: 
audience: 
last_updated: 03-03-2016
summary: 
metadata: false
noPopUp: true
---

<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<link href="css/viewsaurus.css" rel="stylesheet">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js"></script>

<script src="js/ace/ace.js"></script>
<script src="js/ace/theme-monokai.js"></script>

<script src="js/viewsaurus.js"></script>

<br/><br/>

<div data-title="Viewsaurus Tutorial" id="viewsaurus">
    <div class="saurus-panes">
        <div class="saurus-prose">
            <div class="saurus-prose-header">
                <div class="title-outer">
                    <span class="step-title">Viewsaurus Tutorial</span>
                </div>
            </div>
            <div class="saurus-nav-buttons">
                <div class="saurus-nav-button nav-overview">
                    <div class="saurus-nav-button-inner">
                        <i class="fa fa-fw fa-list"></i>
                    </div>
                    <div class="nav-divider"></div>
                </div>
                <div class="saurus-nav-button nav-previous">
                    <div class="saurus-nav-button-inner">
                        <a href=""><i class=
                        "fa fa-fw fa-play fa-rotate-180"></i></a>
                    </div>
                    <div class="nav-divider"></div>
                </div>
                <div class="saurus-nav-button nav-next clickable">
                    <div class="saurus-nav-button-inner">
                        <a href="#1"><i class=
                        "fa fa-fw fa-play"></i></a>
                    </div>
                </div>
                <div class="saurus-next-title">
                    <span class="next-title-inner"></span>
                </div>
            </div>
            <div class="saurus-progress-bar"></div>
            <div class="saurus-start">
                <p>Learn how to make a Viewsaurus</p><a href="#0">Start
                Tutorial</a>
            </div>
            <div class="saurus-content">
                <div class="chapter" data-title="Viewsaurus Tutorial">
                    <div class="step" data-file="tutorial/config.json"
                    data-title="Welcome!">
                        <h2>Welcome!</h2>
                        <p>Today we will learn about Viewsaurus!</p>
                        <p>The tutorial's navigation controls are
                        located above this text. Use <i class=
                        "fa fa-fw fa-play"></i> to move to the next
                        step of the tutorial. Use <i class=
                        "fa fa-fw fa-play fa-rotate-180"></i> to move
                        to the previous step of the tutorial (if there
                        is one). Use <i class="fa fa-fw fa-list"></i>
                        to see an overview of all the steps in the
                        tutorial.</p>
                        <h3>Before You Begin</h3>
                        <p>Before you can begin, this guide assumes you
                        have working knowledge of:</p>
                        <ul>
                            <li>
                                <a href=
                                "https://nodejs.org/en/">Node.js</a>
                            </li>
                            <li>
                                <a href="http://jade-lang.com/">Jade
                                Templating</a>
                            </li>
                            <li>
                                <a href=
                                "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
                                Markdown</a>
                            </li>
                        </ul>
                    </div>
                    <div class="step" data-title=
                    "Creating Your First Viewsaurus!">
                        <h2 id="creating-your-first-viewsaurus">
                        Creating Your First Viewsaurus</h2>
                        <p>First, create a folder and <code>cd</code>
                        using a command prompt into the folder.</p>
                        <p>Next, install Viewsaurus as a global npm
                        package</p>
                        <p><code>npm install viewsaurus -g</code></p>
                        <p>Now we can instantiate a new viewsaurus!</p>
                        <p><code>saurus new (-p fileloc) (-t title) (-r
                        repo) (-B bool)</code></p>
                        <p>The <strong>optional</strong> parameters
                        allow you to specify:</p>
                        <ul>
                            <li><code>-p fileloc</code> - location to
                            create viewsaurus, defaults to current
                            location, example:
                            <code>c:\test\testingproj</code></li>
                            <li><code>-t title</code> - title of your
                            tutorial, example: <code>Tutorial
                            Test</code></li>
                            <li><code>-r repo</code> - github
                            username/repo for the project, example:
                            <code>melissakendall/tutorialtest</code></li>
                            <li><code>-B bool</code> - flag to indicate
                            if project supports instant deployment with
                            the &quot;Heroku Button&quot; example:
                            <code>false</code></li>
                        </ul>
                        <p>With a viewsaurus created, we can deploy
                        it.</p>
                        <p><code>saurus author (-P PORT) (-p
                        fileloc)</code></p>
                        <ul>
                            <li><code>-p PORT</code> is optional and
                            allows you to specify a port other then the
                            default of 8080</li>
                            <li><code>-P fileloc</code> is optional and
                            allows you to provide a different location
                            to serve from, i.e.
                            <code>c:\test\testingproj</code></li>
                        </ul>
                        <p>With author running, we can load up the
                        viewsaurus in a web browser: <a href=
                        "http://localhost:8080/">http://localhost:8080/</a></p>
                        <p>If you specified a different value for PORT
                        in the previous step, modify the URL as
                        appropriate.</p>
                    </div>
                    <div class="step" data-file="tutorial/config.json"
                    data-title="Configuration File">
                        <h2 id="configuration-file">Configuration
                        File</h2>
                        <p>The first thing we will do is look at
                        <code>config.json</code></p>
                        <ul>
                            <li><code>title</code> will appear in the
                            top left hand corner of the screen</li>
                            <li><code>description</code> will appear
                            when you go to URL/ (with a button to begin
                            tutorial)</li>
                            <li><code>repo</code> will provide a link
                            in the right hand sidebar to view the code
                            on github</li>
                            <li><code>heroku</code> is a flag to
                            indiciate if this tutorial will support
                            instant deployment to Heroku</li>
                        </ul>
                    </div>
                    <div class="step" data-file="tutorial/first.jade"
                    data-title="Editing">
                        <h2>Editing</h2>
                        <p>Now that we have a viewsaurus up and
                        running, open up <code>index.jade</code>
                        replace it with the contents of the panel to
                        the right.</p>
                    </div>
                    <div class="step" data-file="tutorial/first.jade"
                    data-highlight="1" data-title="Chapter">
                        <h2>Chapter</h2>
                        <p>Each chapter will begin with a line like
                        this, where <code>data-title</code> has the
                        title name.</p>
                    </div>
                    <div class="step" data-file="tutorial/first.jade"
                    data-highlight="2" data-title="Step">
                        <h2>Step</h2>
                        <p>Each step in the tutorial will begin with
                        this line, where <code>data-file</code> links
                        to the file to be displayed in the left
                        pane.</p>
                    </div>
                    <div class="step" data-file="tutorial/first.jade"
                    data-highlight="3-7" data-title="Content">
                        <h2>Content</h2>
                        <p>Now we can see the content, which uses Jade
                        formatting.</p>
                    </div>
                    <div class="step" data-file="tutorial/first.jade"
                    data-highlight="9" data-title="Blurring Lines">
                        <h2>Blurring</h2>
                        <p>If you want to blur lines, like we have been
                        doing so far, you can use
                        <code>data-highlight</code>.</p>
                    </div>
                    <div class="step" data-file="tutorial/first.jade"
                    data-highlight="10-11" data-title=
                    "Markdown Content">
                        <h2>Markdown</h2>to write in markdown instead?
                        Go ahead, using the <code>:markdown</code>
                        format!
                    </div>
                    <div class="step" data-file="tutorial/first.jade"
                    data-highlight="13-14" data-title=
                    "Syntax Highlighting">
                        <h2>Syntax Highlighting</h2>
                        <p>What if we want to show a different file,
                        like a C# file? You can do that! Check out the
                        <code>data-mode</code> property.</p>
                    </div>
                </div>
                <div class="saurus-files" style="display:none;">
                    <textarea class="saurus-file" data-file=
                    "tutorial/config.json" data-mode=
                    "json">ewogICAgInRpdGxlIjogIlZpZXdzYXVydXMgVHV0b3JpYWwiLAogICAgImRlc2NyaXB0aW9uIjogIkxlYXJuIGhvdyB0byBtYWtlIGEgVmlld3NhdXJ1cyIsCiAgICAicmVwbyI6ICJtZWxpc3Nha2VuZGFsbC90dXRvcmlhbHRlc3RpbmciLAogICAgImhlcm9rdSI6IGZhbHNlCn0=</textarea>
                    
                    <textarea class="saurus-file" data-file=
                    "tutorial/first.jade" data-mode=
                    "jade">LmNoYXB0ZXIoZGF0YS10aXRsZT0nVmlld3NhdXJ1cyBUdXRvcmlhbCcpCiAgLnN0ZXAoZGF0YS10aXRsZT0nV2VsY29tZSEnLCBkYXRhLWZpbGU9J3R1dG9yaWFsL2NvbmZpZy5qc29uJykKICAgIGgyIFdlbGNvbWUhCgogICAgcCBUb2RheSB3ZSB3aWxsIGxlYXJuIGFib3V0IFZpZXdzYXVydXMhCgogICAgcCBUaGUgdHV0b3JpYWwncyBuYXZpZ2F0aW9uIGNvbnRyb2xzIGFyZSBsb2NhdGVkIGFib3ZlIHRoaXMgdGV4dC4gVXNlIDxpIGNsYXNzPSJmYSBmYS1mdyBmYS1wbGF5Ij48L2k+IHRvIG1vdmUgdG8gdGhlIG5leHQgc3RlcCBvZiB0aGUgdHV0b3JpYWwuIFVzZSA8aSBjbGFzcz0iZmEgZmEtZncgZmEtcGxheSBmYS1yb3RhdGUtMTgwIj48L2k+IHRvIG1vdmUgdG8gdGhlIHByZXZpb3VzIHN0ZXAgb2YgdGhlIHR1dG9yaWFsIChpZiB0aGVyZSBpcyBvbmUpLiBVc2UgPGkgY2xhc3M9ImZhIGZhLWZ3IGZhLWxpc3QiPjwvaT4gdG8gc2VlIGFuIG92ZXJ2aWV3IG9mIGFsbCB0aGUgc3RlcHMgaW4gdGhlIHR1dG9yaWFsLgoKICAuc3RlcChkYXRhLXRpdGxlPSdTZWNvbmQgU3RlcCEnLCBkYXRhLWZpbGU9J2NvbmZpZy5qc29uJywgZGF0YS1oaWdobGlnaHQ9JzEnKQogICAgOm1hcmtkb3duCiAgICAgICMjIFRoaXMgaXMgYSBzdGVwIEkgYW0gYXV0aG9yaW5nIGluIG1hcmtkb3duCgogIC5zdGVwKGRhdGEtdGl0bGU9J1RoaXJkIFN0ZXAhJywgZGF0YS1maWxlPSdjb25maWcuanNvbicsIGRhdGEtbW9kZT0iY3NoYXJwIikKICAgIHAgVGhpcyBzdGVwIHVzZXMgYSBDIyBmaWxlIGluIHRoZSB2aWV3ZXIh</textarea>
                </div>
            </div>
            <div class="saurus-overview">
                <ul></ul>
            </div>
        </div>
        <div class="saurus-code">
            <div class="file-path">
                <span class="crumb-container"></span><i class=
                "fa fa-fw fa-folder"></i>
            </div>
            <div class="saurus-editor"></div>
        </div>
        <div class="saurus-explorer">
            <div class="saurus-file-list"></div>
        </div>
    </div>
</div>

<br/><br/>