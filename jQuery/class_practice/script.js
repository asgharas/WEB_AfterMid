// use '$' or 'jquery' for jquery use

jQuery(document).ready(function() {
    console.info("DOM is ready!")
    
    
    jQuery("#btn1").click(function() {
        console.info("clicked on btn1")
        jQuery("#heading1").hide()
    })
    
    
    jQuery("#btn2").click(function() {
        console.info("clicked on btn2")
        jQuery("#heading1").show()
    })
    
    
    jQuery("#btn3").click(function() {
        console.info("clicked on btn3")
        jQuery("#heading1").toggle()
    })
    
    jQuery("#heading1").click(function() {
        console.info("clicked on heading1")
        jQuery(this).hide()
    })

    
    jQuery("#heading1").mouseenter(function() {
        console.info("mouseenter heading1")
        // as the mouse enters the area of heading1, we change its background color to 'red' through css
        jQuery(this).css({'background-color': 'red'})
    })


    jQuery("#heading1").mouseleave(function() {
        console.info("mouseleave heading1")
        // as the mouse leaves the area of heading1, we change its background color back to 'white' through css
        jQuery(this).css({'background-color': 'white'})
    })

    jQuery("#btn1").dblclick(function() {
        console.info("double click on btn1")
        // as the mouse leaves the area of heading1, we change its background color back to 'white' through css
        alert("btn1 double clicked!")
    })


})