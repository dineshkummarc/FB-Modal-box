var modal;

window.addEvent('domready',function(){
	modal = new FbModal({
		'parentEl': 'Content', 
		'title': 'FaithBook Overlay',
		'subTitle': 'FaithBook Overlay using Mootools Jquery.',
		'content': 'FaithBook Overlay is the Modal box overlay cloned from Facebook Social Media using Mootools Jquery.<br/><br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		'height' : 350,
		'width' : 600
	});
});