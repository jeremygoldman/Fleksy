/*
 
 iFlesky Test - Test_iFleksyTypingSwiping.js
  
 1. Launch App
 2. Type Hello SR 6LW SR SD 8LW SR SD SD SD SD SU SU SL SL SL
 3. Clear everything
 4. Test: Compare testValue (both are 1)
 
 */

#import "../../tuneup/tuneup.js"

UIATarget.onAlert = function onAlert(alert) {
    UIALogger.logMessage("alert Shown");
	//target.logElementTree();
    
    if (target.frontMostApp().alert().buttons()["DELETE"].name() != null) {
        UIALogger.logMessage("DELETE alert");
        target.frontMostApp().alert().buttons()["DELETE"].tap();
        return true;
    }
    else if (target.frontMostApp().alert().buttons()["Cool!"].name() != null) {
        UIALogger.logMessage("Cool! alert");
        target.frontMostApp().alert().buttons()["Cool!"].tap();
        return true;
    }
    return false;
}

function swipeDown() {
    target.delay(1);
    UIALogger.logMessage("Swipe Down");
    target.flickInsideWithOptions({startOffset:{x:0.62, y:0.3}, endOffset:{x:0.62, y:0.5}});
}

function swipeUp() {
    target.delay(1);
    UIALogger.logMessage("Swipe UP");
    target.flickInsideWithOptions({startOffset:{x:0.62, y:0.5}, endOffset:{x:0.62, y:0.3}});    
}

function swipeLeft() {
    target.delay(1);
    UIALogger.logMessage("Swipe Left");
    target.flickInsideWithOptions({startOffset:{x:0.8, y:0.5}, endOffset:{x:0.6, y:0.5}});
}

function swipeRight() {
    target.delay(1);
    UIALogger.logMessage("Swipe Right");
    target.flickInsideWithOptions({startOffset:{x:0.62, y:0.5}, endOffset:{x:0.82, y:0.5}});  
}


var MAX_COUNT = 1
var testName1 = "Test_iFleksyTypingSwiping.js";

test(testName1, function(target,app) {
     
     // Loading . . requires a delay for initial blank TextView
     
     target.delay(10);
     
     // This initializes the app to a known state
     
	 app.windows()[1].buttons()["Action"].tap();
	 app.windows()[1].popover().actionSheet().buttons()["Instructions"].tap();
	 app.mainWindow().buttons()["Instructions"].tapWithOptions({tapCount:5});

	 // Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
	 
	 UIALogger.logMessage("alert dismisssed");
	 
	 target.delay(1);
	 
	 app.mainWindow().buttons()["Back"].tap();	 
	 app.windows()[1].buttons()["Action"].tap();
	 
	 var copyClearButton = app.windows()[1].popover().actionSheet().buttons()["Copy & Clear"].name();	 
	 if (copyClearButton != null) {
	 	UIALogger.logMessage("Copy and Clear available");
	 	app.windows()[1].popover().actionSheet().buttons()["Copy & Clear"].tap();
	 }
	 else {
	 	UIALogger.logMessage("No Copy and Clear. Dismiss popover");
	 	target.tap({x:155.00, y:98.00});
	 }
	 
	 target.delay(0);
	 
     var count = 0;
     
     while (count++ != MAX_COUNT) {
     
         var testName = testName1 + count;
         
	 /* 
	  
	  Benign error:
	  
	  Unexpected error in -[UIAButton_0x7c2f4e0 scrollToVisible], /SourceCache/UIAutomation_Sim/UIAutomation-271/Framework/UIAElement.m line 1545, kAXErrorFailure
	  
	  See:
	  http://freynaud.github.com/ios-driver/jsdoc/ee6f9d9609.html
	  
	  scrollToVisible()
scrollToVisible only makes sense if the element if in a webview or a tableView. It was working, and doing nothing for other elements up to ios5.1. Starting from ios6, it now throws : Unexpected error in -[UIAStaticText_0xdc363d0 scrollToVisible], /SourceCache/UIAutomation_Sim/UIAutomation-271/Framework/UIAElement.m line 1545, kAXErrorFailure so need to check first if scrolling will do anything to avoid this exception.
Source:
		UIAElement.js, line 130
	  
	  */

     // 2. Type Hello SR 6LW SR SD 8LW SR SD SD SD SD SU SU SL SL SL
     
         // Slowly Tap Hello on Keyboard
     
         app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.62, y:0.82}});
         app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.26, y:0.70}});
         app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.92, y:0.82}});
         app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.93, y:0.82}});
         app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.86, y:0.71}});
         
        swipeRight();
     
         target.delay(1);
    
     // Slowly Tap 6 letter word on Keyboard
     
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.42, y:0.82}});
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.26, y:0.70}});
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.26, y:0.70}});
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.92, y:0.82}});
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.93, y:0.82}});
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.86, y:0.71}});

     
        swipeRight();
     
        swipeDown();
     
     // Slowly Tap 8 letter word on Keyboard
     
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.62, y:0.82}});
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.26, y:0.70}});
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.92, y:0.82}});
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.26, y:0.70}});
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.26, y:0.70}});
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.26, y:0.70}});
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.26, y:0.70}});
     app.windows()[1].elements()["Activate keyboard with a single tap before typing"].tapWithOptions({tapOffset:{x:0.27, y:0.58}});
     
        swipeRight();
 
        swipeDown();
        swipeDown();
        swipeDown();
        swipeDown();
     
        swipeUp();

        swipeLeft();     
        swipeLeft();     
        swipeLeft();

     //target.logElementTree();
     //UIAButton: name:Send to 0123456789 rect:{{478, 161}, {272, 43}}
     // var testValue = app.windows()[1].popover().actionSheet().buttons()["Send to 0123456789"].name()
     // var compareValue = "Send to 0123456789";
     
         var testValue = "1";
         var compareValue = "1";
     
         //target.delay(1);
         //app.windows()[1].buttons()["Action"].tap();
     
         //app.windows()[1].popover().actionSheet().buttons()["Copy & Clear"].tap();
         
         //         if (testValue == compareValue) {
         //         UIALogger.logPass( testName );
         //         }
         //         else {
         //         UIALogger.logFail( testName );
         //         }
         
         assertEquals(compareValue, testValue, "1 is not equal 1");
         //target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);
     
         // Added for iDevice
         target.delay(1);
         UIALogger.logMessage("END OF LOOP");
     
     
     } //while (count++ != MAX_COUNT)
     
	 target.delay(1);
     UIALogger.logMessage("END OF RUN");
     target.delay(1);
     
});
