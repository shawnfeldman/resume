var assert = require("assert");
var should = require("should");
var Resume = require("../resume").Resume;
describe('Resume', function () {
    describe('#getDetails()', function () {
        it('should not be null', function () {
            var resume = new Resume(),
                details = resume.getDetails();
            should.exist(details);
            details.should.have.length(1);
            should.exist(details[0].company);
        });
    });
});