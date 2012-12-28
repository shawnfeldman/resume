var Resume = function () {
    this.getDetails  = function () {
        return [
            {
                company:'Objective',
                time:'3/27/2010-3/27/2011',
                bullets: [{description: "did some good stuff"}]
            }
        ];
    };
    this.getHeader = function () {
        return {
            name: "Shawn Feldman",
            objective: "To get a job",
            skills: [{kind: "javascript"}, {kind: "nodejs"}, {kind: "backbone"}],
            bullets: [{description: "did some good stuff"}]

        };
    };

};

exports.Resume = Resume;
