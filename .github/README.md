<table align="right"><tr><td><h2>Roadmap</h2> <!-- The list below only stays formatted when there is a line break above --> 

	
 - [ ] Advanced GUI <br> (Multirange slider, etc. Making use of desk viewports)  
 - [ ] Real/strong search, probably including 3rd-party JS-lib <br> (for indexedDB, for understanding SQL, ...)
 - [ ] We don't want to reinvent **any** wheels. If anything exists <br> (in an efficient JS lib or node npm,) it shall be **included**)
    - [ ] integrating Victor's work (see below)
  - [ ] Data: Handling json2html2csv2... as one. Interchangeable <br> (CSV is compact, pretty for structured, permanent data)
    - [ ] integrating with [github.com/d3](https://github.com/d3/d3 )  (=charts/data-journalism) <br> (+justifying our own charting?)

</tr></td></table> 
<h1 align=center><img height="80px" alt="Satus Logo" src="https://user-images.githubusercontent.com/25022245/198879210-090216d0-c02e-49b7-9c8d-bd648fa8b39b.png"> <code><code><a href="https://github.com/code-for-charity/ImprovedTube-for-YouTube/blob/master/js%26css/satus.js">satus.js</a></code></code> & <code><a href="https://github.com/code-for-charity/ImprovedTube-for-YouTube/blob/master/js%26css/satus.css">satus.css</a></code></h1>

- Productive for 600 000+ active users <br>  in a [Youtube Improver](https://github.com/code-charity/youtube) & several Extensions. 
- Please try it & review it!
- Shared Repo yet for [minimalism](https://stackoverflow.com/questions/4611512/is-there-a-way-to-make-git-pull-automatically-update-submodules)
- We lost the original author after X years.

<div align="center">
 <br> </div><br><br><br>


<table align="right"><tr></tr><td><pre>
/*------------satus.JS---------------------------
>>> 1. CORE
-------------------------------------------------
# GLOBAL VARIABLE:
# BASICS: camelize()   snakelize() 
	  isset()  log()
	  sort()
	  data()    	 
# DOM: append()  
	  setAttributes() 
	  createElement()  
	  empty()
	  elementIndex()  
# CSS: css()
	  addClass() 
	  satus.style()
	  getAnimationDuration()	  
# CRYPTION (async)  
	  encrypt() 
	  decrypt() 	
Events.on()
Events.trigger()
fetch() 
 getProperty()
indexOf()    
 toIndex()
# IS: isArray()
	 isElement()
	 isNumber()
# ON: on()
parentify()
prepend()
properties()
remove()
render()
# STORAGE
storage.clear()
storage.get()
storage.import()
storage.remove()
storage.set()
storage.onchanged = function()
last()
# LOCALIZATION
locale.get()
locale.import = function() 
  //satus.locale.import();
text()
 // We always try to run values as functions? 
  // isFunction()  appears 6 times in satus.js
-------------------------------------------------
>>> 2. COMPONENTS
components.modal()
components.modal.confirm
components.grid
components.textField
		   chart	chart.bar  
		   select
components.divider()	section 
		   alert	time	sidebar 
		   layers
		   list
		   colorPicker
		   radio	slider
		   tabs
		   shortcut
		   checkbox	switch
-------------------------------------------------
>>> COLOR:
String to array
RGB2HSL  HUE2RGB   HSL2RGB
-------------------------------------------------
>>> USER
# HARDWARE and SOFTWARE values
	# OS:      Name	Bitness
	# Browser: Name	Version	Platform
		Manifest	Languages
		Cookies
		Flash	Java	Audio
		Video WebGL
	# Device:   Screen
		RAM	GPU	Cores
		Touch	Connection
-------------------------------------------------
>>> SEARCH
// TO-DO or integrate with JS search 'SQL' lib
-----------------------------------------------*/
</pre> </td></table>

<h2> Our Extensions: </h2>

[**<code>History Manager</code>**](https://chrome.google.com/webstore/detail/unblob-alpha/odognhgojidbcgconbcipmgffjcmfaoj)<a href="https://github.com/code-for-charity/history-manager"><img src="github.png" height="18px">(alpha)</a>  **Filter:** <code>[**unFreeze me**](https://chrome.google.com/webstore/detail/ctrl-f-freedom-%20-right-cl/ijngdimmjkngoglcjaheoadciaalbafl " - Unlock your Right-Click, Ctrl+F, Selection anywhere!")</code>[<img src="github.png" height="18px">](https://github.com/code-for-charity/unlock-keyboard-and-mouse)  & <code>[**Dark Mode**](https://chrome.google.com/webstore/detail/dark-mode/declgfomkjdohhjbcfemjklfebflhefl " - Universal dark-mode!") </code>[<img src="github.png" height="18px">](https://github.com/code-for-charity/dark-mode)  
<b> Research:</b> [<code><b> Ultimate Regex (Search & Replace, markup to come?)</b>](https://chrome.google.com/webstore/detail/regex-search/pmihaiejckejbpjdnildimfkpcpnohlo)("Ctrl+F+Shift")</code>[<img src="github.png" height="15px">](https://github.com/code-for-charity/regex) ([`Regex Replace`](https://chrome.google.com/webstore/detail/regex-replace/ihcaaefaoebbcklmolaflgllidfamfgm)<a href="https://github.com/code-for-charity/ultimate-REGEX-extension/issues/3" title="No Repo. We can upload it from Webstore (partly merged"><img src="github.png" height="18px"></a>) **Browser:** [**`Custom user agent`**](https://chrome.google.com/webstore/detail/custom-user-agent/ncgbkkljbaojkhljombpjejedphfhdjj)[<img src="github.png" height="18px">](https://github.com/code-for-charity/user-agent) &  [`auto-scroll`](https://chrome.google.com/webstore/detail/auto-scroll/kpfalbhnppkbokafignonoppegdndlch "(missing in Linux)")<a href="https://github.com/code-for-charity/auto-scroll"><img src="github.png" height="18px"></a>
<br>**Video / Media:** (**to be integrated in ImprovedTube**...) <code>[**Looper**](https://chrome.google.com/webstore/detail/looper/hlnfnoahfgnjnbkdckfnolacbmoknlmi)</code>[<img src="github.png" height="18px">](https://github.com/code-for-charity/looper) <code>[**Frame by Frame**](https://chrome.google.com/webstore/detail/frame-by-frame/cclnaabdfgnehogonpeddbgejclcjneh)</code>[<img src="github.png" height="18px">](https://github.com/code-for-charity/frame-by-frame) [`unBlob`](https://chrome.google.com/webstore/detail/unblob-alpha/odognhgojidbcgconbcipmgffjcmfaoj)[<img src="github.png" height="18px">](https://github.com/code-for-charity/unblob "please fix/adopt me!") (<i><del>Equalizer[<img src="github.png" height="18px">](https://github.com/code-for-charity/equalizer)</del></i>)
<br><b>Home:</b> (Start Page tabs <a href="https://github.com/code-for-charity/start-page"><img src="github.png" height="18px"></a> <i> to be uploaded </i>), [`TextEditor`](https://chrome.google.com/webstore/detail/text-editor/bnbgafdjiinlgnjaedmfaablklnafpka) [<img src="github.png" height="18px">](https://github.com/code-for-charity/Editor), [`ToDo`](https://chrome.google.com/webstore/detail/to-do/mniboiicchcpkffcdlaocnkfpbdihgii)[<img src="github.png" height="18px">](https://github.com/code-for-charity/todo)  
  **Development:**  [**`Satus`**](https://github.com/code-for-charity/satus) (Our JS library) |  [**`WebGL.js`**](https://github.com/code-for-charity/webgl.js) - WebGL Library | [endless grid](https://github.com/code-for-charity/pluviam), [CodeEditor](https://github.com/code-for-charity/code-editor), [TE](https://github.com/code-for-charity/theme-engine), <del> [Viscum Player](https://github.com/code-for-charity/viscum-player)</del> - video.js?)  <br>

### <code><code>🎁</code></code> All of the above is meant/allowed to be source for growing Satus. (All that can be repurosed)

<table><tr></tr> <td><pre>/*------------satus.CSS------------
# SCROLLBAR
# ANIMATIONS
>>> THEMES
>>> NORMALIZE
>>> MODAL
# Container
# Scrim
# Surface
# Variants
	# Vertical menu
# CONTAINER
# SCRIM
# SURFACE
# VARIANTS
# VERTICAL MENU
>>> GRID
>>> TEXT FIELD
# Parts
    # Container
    # Input
    # 
# Syntax highlighting
    # Regular expression
# MULTILINE: FALSE
# SYNTAX HIGHLIGHTING
# REGULAR EXPRESSION
>>> CHART
>>> SELECT
>>> DIVIDER
>>> SECTION
# Variants
	# Align start
	# Align end
	# Card
# Media
# ALIGN START
# ALIGN END
# CARD
# MEDIA
>>> BASE
>>> ALERT
# Media
# MEDIA
>>> INPUT
>>> MAIN
>>> SIDEBAR
>>> LAYERS
>>> LIST
>>> COLOR PICKER:
# Button
# Modal
# BUTTON
# MODAL
>>> SPAN
>>> BUTTON
# Base
# Basic
# Icon
# BASE
# BASIC
# ICON
>>> HEADER
>>> RADIO
>>> SLIDER
>>> TABS
>>> SHORTCUT:
# 
>>> CHECKBOX
>>> SWITCH
# Container
# Track
# Thumb
# CONTAINER
# TRACK
# THUMB
>>> CONTEXT MENU
>>> SORTABLE
------------------------------------*/</pre> </td></table>
