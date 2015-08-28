define(["js/spec_helpers/ajax_helpers"], function(AjaxHelpers) {
    'use strict';
    describe("edx_sga.js", function() {
        describe("StaffGradedAssignmentXBlock", function() {
            it("renders the xblock", function() {
                // Spy on Ajax requests
                var requests = AjaxHelpers.requests(this);

                "js/src/edx_sga"
                
                // Mock some arguments
                var element = $("<div>" +
                                "<input type='hidden' name='one' value='1' />" +
                                "<input type='hidden' name='two' value='2' />" +
                                "<input type='hidden' name='three' value='3' /></div>");
                var server = null;

                var runtime = {
                    handlerUrl: function(element, urlPiece) {
                        return "/" + urlPiece + "/";
                    },
                };
                
                var XBlock = StaffGradedAssignmentXBlock(runtime, element);
                // Function expects this.runtime to exist
                XBlock.xblock = XBlock.xblock.bind({runtime: runtime});

                
            });
        });
    });
});
